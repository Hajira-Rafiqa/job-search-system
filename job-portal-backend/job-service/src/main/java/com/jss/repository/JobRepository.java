package com.jss.repository;

import org.springframework.data.repository.CrudRepository;

import com.jss.entity.User;

public interface JobRepository extends CrudRepository<User, Integer>{

}
