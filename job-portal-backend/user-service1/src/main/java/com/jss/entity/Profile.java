package com.jss.entity;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import com.jss.dto.Certification;
import com.jss.dto.Experience;
import com.jss.dto.ProfileDTO;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Document(collection = "profiles")
public class Profile {

	@Id
	private Long id;
	private String email;
	private String jobTitle;
	private String company;
	private String location;
	private String about;
	private List<String> skills;
	private List<Experience> experience;
	private List<Certification> certifications;


	public ProfileDTO toDTO() 
	{
		return new ProfileDTO(this.id, this.email, this.jobTitle, this.company, this.location, this.about, 
				this.skills, this.experience, this.certifications);
	}
}