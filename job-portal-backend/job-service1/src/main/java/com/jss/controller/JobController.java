package com.jss.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jss.dto.JobDTO;
import com.jss.exception.JobPortalException;
import com.jss.service.JobService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@Validated
@RequestMapping("/jobs")
public class JobController {

	@Autowired
	private JobService jobService;
	
	@PostMapping("/post")
	public ResponseEntity<JobDTO>postJob(@RequestBody @Valid JobDTO jobDTO) throws JobPortalException
	{
		
		return new ResponseEntity<>(jobService.postJob(jobDTO), HttpStatus.CREATED);
	
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<JobDTO>>getAllJobs() throws JobPortalException
	{
		
		return new ResponseEntity<>(jobService.getAllJobs(), HttpStatus.OK);
	
	} 
	
	@GetMapping("/get/{id}")
	public ResponseEntity<JobDTO>getAllJobs(@PathVariable("id") long id) throws JobPortalException
	{
		
		return new ResponseEntity<>(jobService.getJob(id), HttpStatus.OK);
	
	} 
	
}
