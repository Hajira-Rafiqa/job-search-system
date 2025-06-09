package com.jss.service;

import java.util.List;

import com.jss.dto.JobDTO;

import jakarta.validation.Valid;

public interface JobService {

	public JobDTO postJob( JobDTO jobDTO);

	public List<JobDTO> getAllJobs();

	public JobDTO getJob( Long id);
}
