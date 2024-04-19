# 터미널에서
#  pip install fastapi / pandas / scikit-learn / fastapi / fastapi 'uvicorn[standard]'
# => 한번만 하면 됨

# package import
from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel # 정보 저장할것
from starlette.responses import JSONResponse
import pickle
import numpy as np
import pandas as pd
from datetime import datetime
import cx_Oracle
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn import metrics
import json
import os
from sklearn.cluster import KMeans
from sklearn.cluster import DBSCAN
from sklearn.neighbors import NearestNeighbors
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# 요청 받을 데이터가 담길 모델 만들기
class Item(BaseModel) :
    # 멤버들
    vsl_id : str
    hour : int

app = FastAPI()

@app.post(path="/ship", status_code=201) # path=''에 스프링의 application.properties 에서 url에 쓴 경로 그대로 쓰기
def mypath(item : Item) : 
    
    # oracle에서 데이터 가져오기
    result = Oracle()
    sql_list = []
    print(item.vsl_id, item.hour)
    for n in result.selectAll(item.vsl_id, item.hour):
        #print(n)
        sql_list.append(n)

    currentpath = pd.DataFrame(sql_list, columns=['vsl_id','vsl_timestamp','vsl_speed','vsl_course','vsl_heading','vsl_draught','nav_status','lat','lon','destination','unlocode','eta'])

    for column in currentpath.columns:
        if currentpath[column].dtype == np.int64:
            currentpath[column] = currentpath[column].astype(int)


    # 피클 파일 로딩(메모리에 올리기)
    if(item.vsl_id=='HK'):
        with open('KRHK_originaldata.pkl', 'rb') as f2:
            originaldata = pickle.load(f2)
            for column in originaldata.columns:
                if originaldata[column].dtype == np.int64:
                    originaldata[column] = originaldata[column].astype(int)
        with open('KRHK_stdpath.pkl', 'rb') as f3:
            stdpath = pickle.load(f3)
            for i in range(len(stdpath)):
                for column in stdpath[i].columns:
                    if stdpath[i][column].dtype == np.int64:
                        stdpath[i][column] = stdpath[i][column].astype(int)
        part, pathnum = KH_mostsimPath(currentpath, originaldata, stdpath)
    
    elif(item.vsl_id=='VT'):
        with open('VTKR_originaldata.pkl', 'rb') as f2:
            originaldata = pickle.load(f2)
            for column in originaldata.columns:
                if originaldata[column].dtype == np.int64:
                    originaldata[column] = originaldata[column].astype(int)
        with open('VTKR_stdpath.pkl', 'rb') as f3:
            stdpath = pickle.load(f3)
            for i in range(len(stdpath)):
                for column in stdpath[i].columns:
                    if stdpath[i][column].dtype == np.int64:
                        stdpath[i][column] = stdpath[i][column].astype(int)
        part, pathnum = VK_mostsimPath(currentpath, originaldata, stdpath)
            
    elif(item.vsl_id=='JP'):
        with open('KRJP_originaldata.pkl', 'rb') as f2:
            originaldata = pickle.load(f2)
            for column in originaldata.columns:
                if originaldata[column].dtype == np.int64:
                    originaldata[column] = originaldata[column].astype(int)
        with open('KRJP_stdpath.pkl', 'rb') as f3:
            stdpath = pickle.load(f3)
            for i in range(len(stdpath)):
                for column in stdpath[i].columns:
                    if stdpath[i][column].dtype == np.int64:
                        stdpath[i][column] = stdpath[i][column].astype(int)
        part, pathnum = KJ_mostsimPath(currentpath, originaldata, stdpath)
    print(type(part), type(int(pathnum)))
    result2 = {"part":part, "pathnum":int(pathnum+1)}

    return JSONResponse(result2) # 결과 전달

class Oracle:

    def __init__(self): #객체가 만들어질때 자동으로 호출이 되도록 __init__으로 만듬

        dsn = cx_Oracle.makedsn('localhost',1521,service_name='xe') 

        self.con = cx_Oracle.connect(user= 'hr', password='hr', dsn=dsn, encoding='UTF-8')

        self.cur =  self.con.cursor() 


    def selectAll(self, vsl_id, hour):

        mysql = "SELECT * FROM normalpath WHERE vsl_id LIKE '%"+vsl_id+"%' AND vsl_timestamp < (SELECT MIN(vsl_timestamp) FROM normalpath WHERE vsl_id LIKE '%"+vsl_id+"%') + INTERVAL '1' HOUR * "+str(hour)+" ORDER BY vsl_timestamp"

        self.cur.execute(mysql)
        
        return self.cur.fetchall()

def VK_mostsimPath(data, originaldata, stdpath):
    
    # =============== 구간 나누기 ===============
    df = data[['lat', 'lon']]

    angle = 300
    radians = np.deg2rad(angle)
    rotation_matrix = np.array([[np.cos(radians), -np.sin(radians)],
                                [np.sin(radians), np.cos(radians)]])
    
    rotated_data = df.dot(rotation_matrix)
    rotated_data.columns = ['x','y']
    
    sorted_df = rotated_data.sort_values('y')
    
    minus = 62.346338943808156
    rotated_data['y'] = rotated_data['y'] - minus
    divide = 25
    rate = 1.3167
    print("돌리기 완료")
    part_list = []
    rotated_data['part'] = 0
    for i in range(len(rotated_data)):
        part = 0
        for num in range(divide):
            if rate*num <= rotated_data['y'][i] < rate*(num+1):
                part = num
                part_list.append(part)
        if rotated_data['y'][i] >= rate*divide:
            part = divide - 1
            part_list.append(part)
    
    df['part'] = part_list
    print("구간 나누기 완료")

    # =============== KNN ===============
    parted_df_list = []
    
    for i in df['part'].unique():
        
        predict_df = df[df['part']==i]
        
        part_df = originaldata[originaldata['part']==i]
        
        train_df = part_df[part_df['size'].notna()]
        
        if len(predict_df) != 0:
            x = train_df[['lat','lon']]
            y = train_df['cluster_num']

            x_predict = predict_df[['lat','lon']]
            
            knn = KNeighborsClassifier(n_neighbors=len(y.unique()))
            knn.fit(x, y)
            
            predicted_cluster = knn.predict(x_predict)
            
            predict_df['cluster_num'] = predicted_cluster

            cnt = 0 # 각 구간에서 가장 큰 군집에 속하는 데이터들의 개수를 저장할 변수
            biggest_clsuter = [] # 가장 큰 군집 번호와 속하는 데이터들의 개수를 저장할 리스트
            
            # 각 구간의 군집 번호를 돌면서 속하는 데이터 개수가 cnt보다 크면 cnt 갱신
            for i2 in predict_df['cluster_num'].unique(): 
                if cnt < len(predict_df[predict_df['cluster_num'] == i2]):
                    cnt = len(predict_df[predict_df['cluster_num'] == i2])
                    biggest_clsuter = [i2, cnt]
                else:
                    cnt = cnt
                    
            # 해당 군집의 구간, 군집번호, 사이즈, 평균 위경도 정보 추출
            cluster_df = part_df[part_df['cluster_num']==biggest_clsuter[0]][['lat', 'lon', 'part', 'cluster_num']]

            row = cluster_df[round(len(cluster_df)/2):round(len(cluster_df)/2)+1]
            parted_df_list.append(row)
            
    # print(parted_df_list)
    clusted_path = pd.concat(parted_df_list, axis=0)
    clusted_path.reset_index(drop=True, inplace=True)
    print("KNN 완료")
    
    # 구간 0부터 시작하게 맞추기
    clusted_path['part'] = clusted_path.sort_values(['part'])['part'].values
    
    # =============== 코사인 유사도 계산 ===============
    # 비교할 항로의 shape 에 맞춘 표준항로의 군집 번호만 담을 매트릭스 만들기
    # 비교할 항로 : data, 표준항로들을 담은 list : stdpath
    standard_path_matrix = np.zeros((len(stdpath), len(clusted_path)))

    for i in range(len(stdpath)):
        standard_path_matrix[i] = stdpath[i]['cluster_num'].values[1:len(clusted_path)+1]
    
    # 비교할 항로의 군집 번호만 담은 1행 n열(구간 개수)짜리 매트릭스 만들기
    real_path_matrix = np.matrix(clusted_path['cluster_num'].values)
    
    path_sim = cosine_similarity(real_path_matrix, standard_path_matrix)
    
    most_similar_path = stdpath[path_sim.argmax()]
    
    return len(real_path_matrix.T), path_sim.argmax()

def KJ_mostsimPath(data, originaldata, stdpath):
    
    # =============== 구간 나누기 ===============
    df = data[['lat', 'lon']]

    angle = 0
    radians = np.deg2rad(angle)
    rotation_matrix = np.array([[np.cos(radians), -np.sin(radians)],
                                [np.sin(radians), np.cos(radians)]])
    
    rotated_data = df.dot(rotation_matrix)
    rotated_data.columns = ['x','y']
    
    sorted_df = rotated_data.sort_values('y')
    
    minus = 129.05028
    rotated_data['y'] = rotated_data['y'] - minus
    divide = 15
    rate = 0.7224
    
    part_list = []
    rotated_data['part'] = 0
    for i in range(len(rotated_data)):
        for num in range(divide):
            if rate*num <= rotated_data['y'][i] < rate*(num+1):
                part = num
                part_list.append(part)
        if rotated_data['y'][i] >= divide:
            part = divide - 1
            part_list.append(part)
    
    df['part'] = part_list

    # =============== KNN ===============
    parted_df_list = []
    
    for i in df['part'].unique():
        
        predict_df = df[df['part']==i]
        
        part_df = originaldata[originaldata['part']==i]
        
        train_df = part_df[part_df['size'].notna()]
        
        if len(predict_df) != 0:
            x = train_df[['lat','lon']]
            y = train_df['cluster_num']

            x_predict = predict_df[['lat','lon']]
            
            knn = KNeighborsClassifier(n_neighbors=len(y.unique()))
            knn.fit(x, y)
            
            predicted_cluster = knn.predict(x_predict)
            
            predict_df['cluster_num'] = predicted_cluster

            cnt = 0 # 각 구간에서 가장 큰 군집에 속하는 데이터들의 개수를 저장할 변수
            biggest_clsuter = [] # 가장 큰 군집 번호와 속하는 데이터들의 개수를 저장할 리스트
            
            # 각 구간의 군집 번호를 돌면서 속하는 데이터 개수가 cnt보다 크면 cnt 갱신
            for i2 in predict_df['cluster_num'].unique(): 
                if cnt < len(predict_df[predict_df['cluster_num'] == i2]):
                    cnt = len(predict_df[predict_df['cluster_num'] == i2])
                    biggest_clsuter = [i2, cnt]
                else:
                    cnt = cnt
                    
            # 해당 군집의 구간, 군집번호, 사이즈, 평균 위경도 정보 추출
            cluster_df = part_df[part_df['cluster_num']==biggest_clsuter[0]][['lat', 'lon', 'part', 'cluster_num']]

            row = cluster_df[round(len(cluster_df)/2):round(len(cluster_df)/2)+1]
            parted_df_list.append(row)
            
    clusted_path = pd.concat(parted_df_list, axis=0)
    clusted_path.reset_index(drop=True, inplace=True)
    
    # 구간 0부터 시작하게 맞추기
    clusted_path['part'] = clusted_path.sort_values(['part'])['part'].values
    
    # =============== 코사인 유사도 계산 ===============
    # 비교할 항로의 shape 에 맞춘 표준항로의 군집 번호만 담을 매트릭스 만들기
    # 비교할 항로 : data, 표준항로들을 담은 list : stdpath
    standard_path_matrix = np.zeros((len(stdpath), len(clusted_path)))

    for i in range(len(stdpath)):
        standard_path_matrix[i] = stdpath[i]['cluster_num'].values[1:len(clusted_path)+1]

    # 비교할 항로의 군집 번호만 담은 1행 n열(구간 개수)짜리 매트릭스 만들기
    real_path_matrix = np.matrix(clusted_path['cluster_num'].values)
    
    path_sim = cosine_similarity(real_path_matrix, standard_path_matrix)
    
    most_similar_path = stdpath[path_sim.argmax()]
    
    return len(real_path_matrix.T), path_sim.argmax()

def KH_mostsimPath(data, originaldata, stdpath):
    
    # =============== 구간 나누기 ===============
    df = data[['lat', 'lon']]
    rotation_matrix = np.array([[ 0.69322046,  0.7207256 ], [-0.7207256 ,  0.69322046]])
    df_centered = df - np.mean(originaldata[['lat','lon']], axis=0)
    
    rotated_data = df_centered.dot(rotation_matrix)
    rotated_data.columns = ['x','y']
    
    sorted_df = rotated_data.sort_values('y')
    
    minus = -9.108363534136771
    rotated_data['y'] = rotated_data['y'] - minus
    divide = 20
    rate = 1
    
    part_list = []
    rotated_data['part'] = 0
    for i in range(len(rotated_data)):
        for num in range(divide):
            if rate*num <= rotated_data['y'][i] < rate*(num+1):
                part = num
                part_list.append(part)
        if rotated_data['y'][i] >= divide:
            part = divide - 1
            part_list.append(part)
    
    df['part'] = part_list

    # =============== KNN ===============
    parted_df_list = []
    
    for i in df['part'].unique():
        
        predict_df = df[df['part']==i]
        
        part_df = originaldata[originaldata['part']==i]
        
        train_df = part_df[part_df['size'].notna()]
        
        if len(predict_df) != 0:
            x = train_df[['lat','lon']]
            y = train_df['cluster_num']

            x_predict = predict_df[['lat','lon']]
            
            knn = KNeighborsClassifier(n_neighbors=len(y.unique()))
            knn.fit(x, y)
            
            predicted_cluster = knn.predict(x_predict)
            
            predict_df['cluster_num'] = predicted_cluster

            cnt = 0 # 각 구간에서 가장 큰 군집에 속하는 데이터들의 개수수를 저장할 변수
            biggest_clsuter = [] # 가장 큰 군집 번호와 속하는 데이터들의 개수를 저장할 리스트
            
            # 각 구간의 군집 번호를 돌면서 속하는 데이터 개수가 cnt보다 크면 cnt 갱신
            for i2 in predict_df['cluster_num'].unique(): 
                if cnt < len(predict_df[predict_df['cluster_num'] == i2]):
                    cnt = len(predict_df[predict_df['cluster_num'] == i2])
                    biggest_clsuter = [i2, cnt]
                else:
                    cnt = cnt
                    
            # 해당 군집의 구간, 군집번호, 사이즈, 평균 위경도 정보 추출
            cluster_df = part_df[part_df['cluster_num']==biggest_clsuter[0]][['lat', 'lon', 'part', 'cluster_num']]

            row = cluster_df[round(len(cluster_df)/2):round(len(cluster_df)/2)+1]
            parted_df_list.append(row)
            
    clusted_path = pd.concat(parted_df_list, axis=0)
    clusted_path.reset_index(drop=True, inplace=True)
    
    # 구간 0부터 시작하게 맞추기
    clusted_path['part'] = clusted_path.sort_values(['part'])['part'].values
    
    # =============== 코사인 유사도 계산 ===============
    # 비교할 항로의 shape 에 맞춘 표준항로의 군집 번호만 담을 매트릭스 만들기
    # 비교할 항로 : data, 표준항로들을 담은 list : stdpath
    standard_path_matrix = np.zeros((len(stdpath), len(clusted_path)))

    for i in range(len(stdpath)):
        standard_path_matrix[i] = stdpath[i]['cluster_num'].values[1:len(clusted_path)+1]

    # 비교할 항로의 군집 번호만 담은 1행 n열(구간 개수)짜리 매트릭스 만들기
    real_path_matrix = np.matrix(clusted_path['cluster_num'].values)
    
    path_sim = cosine_similarity(real_path_matrix, standard_path_matrix)
    
    most_similar_path = stdpath[path_sim.argmax()]
    
    return len(real_path_matrix.T), path_sim.argmax()


if __name__ == '__main__' : # 첫 화면으로 구동시킬 때 여러 함수 중 어떤걸 실행해야 할지 모를 때 main에 해당하는 이름을 찾아서 구동
    uvicorn.run(app, host="127.0.0.1", port=9998)