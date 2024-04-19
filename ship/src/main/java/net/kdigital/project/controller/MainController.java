package net.kdigital.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import lombok.extern.slf4j.Slf4j;
import net.kdigital.project.domain.ShipMember;
import net.kdigital.project.service.Memberservice;

@Controller
@Slf4j
public class MainController {
	
	@Autowired
	Memberservice service;
	
	//로그인
	@GetMapping("/login")
	public String login() {
		return "login";	
	}
	
	@GetMapping("/about")
	public String about() {
		return "about";	
	}
	
	@GetMapping("/signup")
	public String signup() {
		return "signup";
	}
	
	@PostMapping("/signup")
	public String signup(ShipMember shipmember) {
		int result = service.insertMember(shipmember);
		
		
		return "redirect:/";
	}
}

