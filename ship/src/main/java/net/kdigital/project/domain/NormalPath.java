package net.kdigital.project.domain;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class NormalPath {
	
	private String vsl_id;
	private Date vsl_timestamp;
	private String vsl_speed, vsl_course, vsl_heading, vsl_draught, nav_status;
	private double lat, lon;
	private String destination, unlocode, eta;
	
}
