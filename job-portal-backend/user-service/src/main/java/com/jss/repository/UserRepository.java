package com.jss.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.jss.entity.User;

public interface UserRepository extends CrudRepository<User, Integer>{
	public Optional<User> findByEmail(String email);
}
