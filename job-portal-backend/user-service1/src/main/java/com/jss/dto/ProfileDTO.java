package com.jss.dto;

import java.util.List;

import com.jss.entity.Profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor

public class ProfileDTO {

	private Long id;
	private String email;
	private String jobTitle;
	private String company;
	private String location;
	private String about;
	private List<String> skills;

	private List<Experience> experience;
	private List<Certification> certifications;
	
	public Profile toEntity() {
		return new Profile(this.id, this.email, this.jobTitle, this.company, this.location, this.about, 
				this.skills, this.experience, this.certifications);
	}

}
