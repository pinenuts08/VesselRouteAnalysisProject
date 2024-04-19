package net.kdigital.project.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.extern.slf4j.Slf4j;
import net.kdigital.project.domain.NormalPath;
import net.kdigital.project.domain.StdPath;
import net.kdigital.project.service.MapService;
import net.kdigital.project.service.PredictService;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Controller
@Slf4j
public class ServiceController {
	
	@Autowired
	MapService service;
	
	@Autowired
	PredictService predservice;

	//서비스소개
	@GetMapping("/serviceinfo")
	public String serviceinfo() {
		
		return "/service/serviceinfo";
	}
	
	//서비스구독
	@GetMapping("/subscribe")
	public String subscribe() {
		log.info("도착");
		return "/service/subscribe";	
	}
	
	//서비스사용
	@GetMapping("/cargoeye")
	public String cargoeye() {
		return "/service/cargoeye";	
	}
	
	@PostMapping("/searchStdPath")
	@ResponseBody
	public List<StdPath> searchStdPath(String pathname, int path_num) {
		
		Map<String, Object> map = new HashMap<>();
		map.put("pathname", pathname);
		map.put("path_num", path_num);
		
		List<StdPath> list = service.searchStdPath(map);
		
		log.info("{}", list);
		
		return list;
	}
	
	@PostMapping("/searchNormalPath")
	@ResponseBody
	public List<NormalPath> searchNormalPath(String vsl_id, int hour) {
		
		Map<String, Object> map = new HashMap<>();
		map.put("vsl_id", vsl_id);
		map.put("hour", hour);
		
		List<NormalPath> list = service.searchNormalPath(map);
		
		return list;
	}
	
	@PostMapping("/predict")
	@ResponseBody
	public Map<String, Object> predict(String vsl_id, int hour) {
		
		// 현재 시간 가져오기
		Map<String, Object> normap = new HashMap<>();
		normap.put("vsl_id", vsl_id);
		normap.put("hour", hour);
		List<NormalPath> normlist = service.searchNormalPath(normap);
		Date currentTime = normlist.get(normlist.size()-1).getVsl_timestamp();
		
		// part, pathnum이 반환됨
		Map<String, Object> map = predservice.predict(vsl_id, hour);
		
		// double을 int로 형변환
		int part = (int)(double) map.get("part");
		int pathnum = (int)(double) map.get("pathnum");
		map.put("part", part);
		map.put("pathnum", pathnum);
		
		// map에 vsl_id도 넣기
		map.put("vsl_id", vsl_id);
		List<StdPath> list = service.searchSimilarPath(map);
		log.info("{}",list.get(0));
		
		// 시간 계산
		String durationstr = list.get(0).getLeft_duration();
		log.info(durationstr);
		String[] parts = durationstr.split(" ");
		int days = Integer.parseInt(parts[0]);
		String[] timeParts = parts[2].split(":");
		int hours = Integer.parseInt(timeParts[0]);
		int minutes = Integer.parseInt(timeParts[1]);
		Duration duration = Duration.ofDays(days).plusHours(hours).plusMinutes(minutes);
		
		long originalTime = currentTime.getTime();
        long resultTime = originalTime + duration.toMillis();
        LocalDateTime calcETA = LocalDateTime.ofInstant(Instant.ofEpochMilli(resultTime), ZoneId.systemDefault());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
        String formattedDateTime = calcETA.format(formatter);
        log.info("currentTime: {}, durationstr: {}, formattedDateTime:{}",currentTime,durationstr,formattedDateTime);

        Map<String, Object> withCalcEta = new HashMap<>();
        withCalcEta.put("list", list);
        withCalcEta.put("formattedDateTime", formattedDateTime);
		
		return withCalcEta; // 항로 번호가 return됨
	}
	
	
}
