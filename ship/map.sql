
drop sequence path_seq;

drop table vk_stdpath;
drop table kh_stdpath;
drop table kj_stdpath;
drop table stdpaths;

-- 표준항로 정보를 저장할 테이블
create table stdpaths (
    pathseq number unique, -- seqno
    pathname varchar2(10) primary key, -- 항로이름   ex) KH : 한국-홍콩
    departure varchar2(10) not null, -- 출발항
    arrival varchar2(10) not null -- 도착항
);
create sequence path_seq;

insert into stdpaths
values
(path_seq.nextval, 'KH', 'BUSAN', 'HONGKONG');

insert into stdpaths
values
(path_seq.nextval, 'VK', 'VIETNAM', 'INCHEON');

insert into stdpaths
values
(path_seq.nextval, 'KJ', 'BUSAN', 'JAPAN');


-- 각 표준항로 테이블 생성

-- 베트남-인천
create table vk_stdpath (
    part number(2) not null,
    cluster_num number(2) not null,
    lat number not null,
    lon number not null,
    path_num number(2) not null, -- path
    duration_cumsum varchar2(30) not null,
    left_duration varchar2(30) not null,
    pathname varchar2(5) default 'VK' references stdpaths(pathname) on delete cascade
);

-- 부산-홍콩
create table kh_stdpath (
    part number(2) not null,
    cluster_num number(2) not null,
    lat number not null,
    lon number not null,
    path_num number(2) not null,
    path_rank number,
    duration_cumsum varchar2(30) not null,
    left_duration varchar2(30) not null,
    pathname varchar2(5) default 'KH' references stdpaths(pathname) on delete cascade
);

-- 부산-일본
create table kj_stdpath (
    part number(2) not null,
    cluster_num number(2) not null,
    lat number not null,
    lon number not null,
    path_num number(2) not null,
    path_rank number,
    duration_cumsum varchar2(30) not null,
    left_duration varchar2(30) not null,
    pathname varchar2(5) default 'KJ' references stdpaths(pathname) on delete cascade
);

-- path_num 1부터 차례대로 맞추기 => select * from 해당 표준항로 테이블명 해서 우선 원래 path_num알아야함
-- 이후 차례대로 1부터 해서 바꾸기
-- ex)
update kh_stdpath
set path_num = 1
where path_num like ?;


-- 일반항로(AIS 데이터) 테이블 생성
drop table normalpath;

create table normalpath
(
    vsl_id varchar2(50),
    vsl_timestamp date,
    vsl_speed varchar2(50),
    vsl_course varchar2(50),
    vsl_heading varchar2(50),
    vsl_draught varchar2(50),
    nav_status varchar2(50),
    lat number,
    lon number,
    destination varchar2(50),
    unlocode varchar2(50),
    eta varchar2(50)
);

ALTER SESSION SET NLS_DATE_FORMAT = 'YYYY-MM-DD HH24:MI';

-- vsl_id 컬럼 값 바꾸기
update normalpath
set vsl_id = 'fcb9d93e_KRHK'
where vsl_id like 'fcb9d93e%';
update normalpath
set vsl_id = '0d67e314_VTKR'
where vsl_id like '0d67e314%';
update normalpath
set vsl_id = '3a516512_KRJP'
where vsl_id like '3a516512%';

-- 조회시 이렇게 해야함
select * from normalpath
where vsl_id like #{vsl_id}}||'%'
order by vsl_timestamp;