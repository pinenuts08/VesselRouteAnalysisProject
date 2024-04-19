package net.kdigital.project.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.extern.slf4j.Slf4j;
import net.kdigital.project.domain.Board;
import net.kdigital.project.service.BoardService;

@Controller
@Slf4j
public class CustomerController {
	
	@Value("${spring.servlet.multipart.location}") // Value : ()안에 넣은 설정의 정보를 읽어옴
	// properties에 적은 설정 정보를 읽어오는 것
	String uploadPath; // 읽어온 정보를 해당 변수에 넣음
	
	
	@Autowired
	BoardService service;
	
	// 게시글 목록 페이지 로드
	@GetMapping("/boardList")
	public String boardList() {
		return "/customer/boardList";
	}
	
	//게시글 목록
	@RequestMapping(value="/loadList", method={RequestMethod.GET, RequestMethod.POST}) // 이렇게 하면 get도 받고 post도 받음
	@ResponseBody
	public Map<String, Object> boardList(@RequestParam(value="searchWord", defaultValue = "") String searchWord) {
		
		List<Board> listboard = service.selectAllBoard(searchWord);
		
		Map<String, Object> map = new HashMap<>();
		
		map.put("listboard", listboard);
		map.put("searchWord", searchWord);
		
		return map;
	}
	
	
	// 게시글 작성 페이지 로드
	@GetMapping("/boardWrite")
	public String boardWrite() {
		return "/customer/boardWrite";	
	}
	
	// 게시글 작성하기
	@GetMapping("/insertBoard")
	public String insertBoard(
			String memberid,
			String title,
			String boardtext) {
		Map<String, Object> map = new HashMap<>();
		map.put("memberid", memberid);
		map.put("title", title);
		map.put("boardtext", boardtext);
		
		int result = service.insertBoard(map);

		return "redirect:/boardList";
	}
	
	/**
	 * 글 1개 조회
	 * @param boardseq : 조회하려고 하는 글의 PK
	 * @param model
	 * @return
	 */
	@GetMapping("/readboard")
	public String readboard(int boardseq, Model model) { // boardseq를 전달인자로 받음
		// 글 한개를 조회해서 받아온 데이터를 화면에서 볼 수 있게 해야함
		
		// boardseq에 해당하는 1개의 글을 DB에서 조회
		Board board = service.selectBoard(boardseq);
		log.info("{}",board);
		// model에 담아 화면에 뿌림
		model.addAttribute("board", board);
		
		return "/customer/readboard";
	}
	
	/**
	 * 글 삭제
	 * @param boardseq : 삭제하려고 하는 글의 PK
	 * @param model
	 * @return
	 */
	@GetMapping("/deleteboard")
	public String deleteboard(int boardseq) {
		// 삭제하려는 문서를 먼저 읽어옴
		Board board = service.selectBoard(boardseq);
		
		// 글 삭제
		int result = service.deleteBoard(boardseq);
		
		return "redirect:/boardList";
	}
	
	//해운뉴스
	@GetMapping("/marine_news")
	public String marine_news() {
		return "/customer/marine_news";	
	}
	
	//컨택. 연락
	@GetMapping("/contact")
	public String contact() {
		return "/customer/contact";	
	}
	
}
