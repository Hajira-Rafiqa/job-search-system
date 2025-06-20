package com.jss.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Experience {

	private String title;
	private String company;
	private String location;
	private LocalDateTime startDate;
	private LocalDateTime endDate;
	private Boolean working;
	private String description;
}
