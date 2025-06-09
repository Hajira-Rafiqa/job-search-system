package com.jss.service;

import java.util.List;

import com.jss.dto.JobDTO;
import com.jss.exception.JobPortalException;

public interface JobService {

	public JobDTO postJob( JobDTO jobDTO) throws JobPortalException;

	public List<JobDTO> getAllJobs();

	public JobDTO getJob( Long id) throws JobPortalException;
}
