package com.jss.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.jss.entity.Job;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobDTO {
	
	private long id;
	private String jobTitle;
	private String company;
	private List<Applicant> applicants;
	private String about;
	private String experience;
	private String jobType;
	private String loaction;
	private Long packageoffered;
	private LocalDateTime postTime;
	private String description;
	private List<String> skillsRequired;
	private JobStatus jobStatus; 
	
	public Job toEntity()
	{
		return new Job(this.id, this.jobTitle, this.company,
						this.applicants, this.about, this.experience,
						this.jobType, this.loaction, this.packageoffered,
						this.postTime, this.description, this.skillsRequired,
						this.jobStatus);
	}
}
