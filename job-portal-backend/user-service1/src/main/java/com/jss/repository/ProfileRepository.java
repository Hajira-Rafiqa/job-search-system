package com.jss.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jss.entity.Profile;

@Repository
public interface ProfileRepository extends MongoRepository<Profile, Long> {

	
}
