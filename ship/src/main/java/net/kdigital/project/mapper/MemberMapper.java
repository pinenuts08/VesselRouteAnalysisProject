package net.kdigital.project.mapper;

import org.apache.ibatis.annotations.Mapper;

import net.kdigital.project.domain.ShipMember;

@Mapper
public interface MemberMapper {

	int insertMember(ShipMember shipmember);

}
