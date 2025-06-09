package com.jss.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Applicant {
	private Long applicantId;
	private LocalDateTime timestamp;
	private ApplicationStatus applicationStatus;
}
