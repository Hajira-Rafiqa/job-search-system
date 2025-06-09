package com.jss.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jss.dto.UserDTO;
import com.jss.entity.User;
import com.jss.exception.JobPortalException;
import com.jss.repository.UserRepository;

@Service(value = "userService")
public class UserServiceImpl implements UserService {

	@Autowired
	public UserRepository userRepository; 
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	//@Autowired
	//public ProfileService profileService;
	
	
	@Override
	public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {
		Optional<User> optional = userRepository.findByEmail(userDTO.getEmail());
		
		if(optional.isPresent()) 
			throw new JobPortalException("USER_FOUND");
		
		//UserDTO.setProfileId(profileService.createProfile(userDTO.getEmail()))
		userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		User user = userDTO.toEntity();
		user = userRepository.save(user);
		return user.toDTO();
	}

}
