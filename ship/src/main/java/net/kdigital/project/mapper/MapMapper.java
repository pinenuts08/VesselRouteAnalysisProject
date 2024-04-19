package net.kdigital.project.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import net.kdigital.project.domain.NormalPath;
import net.kdigital.project.domain.StdPath;

@Mapper
public interface MapMapper {

	List<StdPath> searchStdPath(Map<String, Object> map);

	List<NormalPath> searchNormalPath(Map<String, Object> map);

	List<StdPath> searchSimilarPath(Map<String, Object> map);

}
