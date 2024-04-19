package net.kdigital.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class InformationController {

	//환율
	@GetMapping("/exchange")
	public String exchange() {
		return "/information/exchange";	
	}
	//날씨
	@GetMapping("/weather")
	public String weather() {
		return "/information/weather";	
	}
	//선박
	@GetMapping("/shipInfo")
	public String shipInfo() {
		return "/information/shipInfo";	
	}
	//선박스케줄
	@GetMapping("/schedule")
	public String schedule() {
		return "/information/schedule";	
	}
}
