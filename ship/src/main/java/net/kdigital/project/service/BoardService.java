package net.kdigital.project.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.kdigital.project.domain.Board;
import net.kdigital.project.mapper.BoardMapper;

@Service
public class BoardService {

	@Autowired
	BoardMapper mapper;

	public List<Board> selectAllBoard(String searchWord) {
		List<Board> list = mapper.selectAllBoard(searchWord);
		return list;
	}

	public Board selectBoard(int boardseq) {
		mapper.updateHitcount(boardseq);
		Board board = mapper.selectBoard(boardseq);
		return board;
	}

	public int insertBoard(Map<String, Object> map) {
		int result = mapper.insertBoard(map);
		return result;
	}

	public int deleteBoard(int boardseq) {
		int result = mapper.deleteBoard(boardseq);
		return 0;
	}
	
}
