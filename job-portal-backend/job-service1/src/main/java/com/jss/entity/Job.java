package com.jss.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.jss.dto.Applicant;
import com.jss.dto.JobDTO;
import com.jss.dto.JobStatus;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Job {
	@Id
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
	
	public JobDTO toDTO()
	{
		return new JobDTO(this.id, this.jobTitle, this.company,
						this.applicants, this.about, this.experience,
						this.jobType, this.loaction, this.packageoffered,
						this.postTime, this.description, this.skillsRequired,
						this.jobStatus);
	}
}
