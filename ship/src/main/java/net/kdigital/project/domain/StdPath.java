package net.kdigital.project.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class StdPath {

	private int part, cluster_num;
	private double lat, lon;
	private int path_num;
	private String duration_cumsum, left_duration, pathname;
	
}
