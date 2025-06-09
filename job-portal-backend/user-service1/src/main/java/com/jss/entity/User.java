package com.jss.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.jss.dto.UserDTO;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor

@Document(collection="users")
public class User {

	@Id
	private Long id;
	private String name;
	
	@Indexed(unique=true)
	private String email;
	private String password;
	private String accountType; 
	private Long profileId;
	
	public UserDTO toDTO () {
		return new UserDTO(this.id, this.name, this.email, this.password, this.accountType, this.profileId);
	}
}


