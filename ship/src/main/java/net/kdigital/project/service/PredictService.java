package net.kdigital.project.service;

import java.util.Collections;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class PredictService {
	@Value("${path.predict.server}")
	String url;
	
	@Autowired
	RestTemplateBuilder restTemplateBuilder;

	@SuppressWarnings("unchecked")
	public Map<String, Object> predict(String pathname, int hour) {
		
		// 데이터를 파이썬으로 보내는 작업
		log.info("Spring : pathname 정보 : {}, {}", pathname, hour);
		log.info("FastApi 서버 url : {}", url);
		
		Map<String, Object> result = new HashMap<>(); // 에러났을 때 exception을 받을 변수
		Map<String, Object> map = new HashMap<>(); // 에러가 안 뜨고 정상적인 값일 때 반환할 것
		
		try {
			Map<String, Object> param = new HashMap<>();
			
			// 서버로 보낼 쿼리 스트링 작성
			param.put("vsl_id", pathname);
			param.put("hour", hour);
			
			// 헤더 준비 => spring의 HttpHeaders을 import해야함
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED); // form에서 입력받은 게 아니라 이렇게 인코딩해야함
			headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
			
			// 서버로 보낼 준비
			RestTemplate restTemplate = new RestTemplate();
			
			// POST 방식으로 전송 시 RestTemplate의 postForEntity() 메소드 사용
			// 1. url, 2.요청 body에 들어가는 값(파라메터 값), 3.응답 바디로(반환) 받을 타입(대부분 String)
			// String으로 썼지만 실제로는 ResponseEntity<String>으로 받음
			ResponseEntity<String> response = restTemplate.postForEntity(url, param, String.class); // postForEntity : 파이썬으로 요청 보내고 결과 받음
			
			GsonBuilder builder = new GsonBuilder();
			builder.setPrettyPrinting();
			Gson gson = builder.create();
			
			map = gson.fromJson(response.getBody(), Map.class); // body안에 있는 데이터만 꺼내서 Map으로 변경
			
		} catch (HttpClientErrorException | HttpServerErrorException e) {
			result.put("statusCode", e.getRawStatusCode()); // 에러 코드 반환
			result.put("body", e.getStatusText()); // 에러 내용 반환
			
			log.info("{}",result);
			return result;
		} catch (Exception e) {
			result.put("status", "999");
			result.put("body", "Exception 발생"); // 에러 내용 반환
			log.info("{}",result);
			return result;
		} // 오류
		
		return map; // 정상
		
		
	}

	
}
