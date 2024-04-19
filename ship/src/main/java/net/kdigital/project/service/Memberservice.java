package net.kdigital.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import net.kdigital.project.domain.ShipMember;
import net.kdigital.project.mapper.MemberMapper;

@Service
public class Memberservice {

	@Autowired
	MemberMapper mapper;
	
	@Autowired
	PasswordEncoder passwordEnconder;

	public int insertMember(ShipMember shipmember) {
		int result = 0;
		String encodedPassword = passwordEnconder.encode(shipmember.getMemberpw()); // 암호화 할 비밀번호를 꺼내서 인코딩
		shipmember.setMemberpw(encodedPassword); // 암호화시킨 비밀번호를 세팅(집어넣음)
		
		result = mapper.insertMember(shipmember);
		return result;
	}
	
	
}
