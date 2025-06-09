package com.jss.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jss.entity.Job;


@Repository
public interface JobRepository extends MongoRepository<Job, Long> {

	
}
