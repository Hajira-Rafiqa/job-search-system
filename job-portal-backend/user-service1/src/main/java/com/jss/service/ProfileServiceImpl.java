package com.jss.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jss.dto.ProfileDTO;
import com.jss.entity.Profile;
import com.jss.exception.JobPortalException;
import com.jss.repository.ProfileRepository;
import com.jss.utility.Utilities;

@Service(value = "profileService")
public class ProfileServiceImpl implements ProfileService {

	@Autowired
	private ProfileRepository profileRepository;
	
	@Override
	public Long createProfile(String email) throws JobPortalException {
		Profile profile = new Profile();
		profile.setId(Utilities.getNextSequence("profiles"));
		profile.setEmail(email);
		profile.setSkills(new ArrayList<>());
		profile.setExperience(new ArrayList<>());
		profile.setCertifications(new ArrayList<>());
		profileRepository.save(profile);
		
		return profile.getId();
	}

	@Override
	public ProfileDTO getProfile(Long id) throws JobPortalException {
		return profileRepository.findById(id).orElseThrow(()->
		new JobPortalException("PROFILE_NOT_FOUND")).toDTO();
	}

	@Override
	public ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException {
		profileRepository.findById(profileDTO.getId()).orElseThrow(()->
		new JobPortalException("PROFILE_NOT_FOUND"));
		profileRepository.save(profileDTO.toEntity());
		return profileDTO;
	}
	

}
