package com.jss.service;

import java.time.LocalDateTime;
import java.util.List;

import javax.swing.text.Utilities;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jss.dto.JobDTO;
import com.jss.repository.JobRepository;

@Service("jobService")
public class JobServiceImpl implements JobService{
	
	@Autowired
	private JobRepository jobRepository;

	@Override
	public JobDTO postJob(JobDTO jobDTO) throws JobPortalException {
		jobDTO.setId(Utilities.getNextSequence("jobs"));
		jobDTO.setPostTime(LocalDateTime.now());
		return jobRepository.save(jobDTO.toEntity()).toDTO();
	}

	@Override
	public List<JobDTO> getAllJobs() {
		return jobRepository.findAll().stream().map((x)->x.toDTO()).toList() ;
	}

	@Override
	public JobDTO getJob(Long id) {
		return jobRepository.findById(id) ;
	}
}
