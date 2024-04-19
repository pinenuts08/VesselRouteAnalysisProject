package net.kdigital.project.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import net.kdigital.project.domain.Board;

@Mapper
public interface BoardMapper {

	List<Board> selectAllBoard(String searchWord);

	Board selectBoard(int boardseq);

	void updateHitcount(int boardseq);

	int insertBoard(Map<String, Object> map);

	int deleteBoard(int boardseq);

}
