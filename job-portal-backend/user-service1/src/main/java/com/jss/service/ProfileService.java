package com.jss.service;

import com.jss.dto.ProfileDTO;
import com.jss.exception.JobPortalException;

public interface ProfileService {

	public Long createProfile(String email) throws JobPortalException ;
	public ProfileDTO getProfile(Long id) throws JobPortalException ;
	public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException ;
}
