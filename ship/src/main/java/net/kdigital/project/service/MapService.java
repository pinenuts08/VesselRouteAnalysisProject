package net.kdigital.project.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.kdigital.project.domain.NormalPath;
import net.kdigital.project.domain.StdPath;
import net.kdigital.project.mapper.MapMapper;

@Service
public class MapService {
	
	@Autowired
	MapMapper mapper;
	
	public List<StdPath> searchStdPath(Map<String, Object> map) {
		List<StdPath> list = mapper.searchStdPath(map);
		return list;
	}

	public List<NormalPath> searchNormalPath(Map<String, Object> map) {
		List<NormalPath> list = mapper.searchNormalPath(map);
		return list;
	}

	public List<StdPath> searchSimilarPath(Map<String, Object> map) {
		List<StdPath> list = mapper.searchSimilarPath(map);
		return list;
	}

	
	
}
