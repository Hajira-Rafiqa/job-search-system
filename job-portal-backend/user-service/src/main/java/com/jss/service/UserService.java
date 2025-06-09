package com.jss.service;

import com.jss.dto.UserDTO;
import com.jss.exception.JobPortalException;

public interface UserService {

	public UserDTO registerUser(UserDTO userDTO) throws JobPortalException;
}
