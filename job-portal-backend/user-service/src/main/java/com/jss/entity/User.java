package com.jss.entity;

import com.jss.dto.UserDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor

@Table(name = "users")
public class User {

	@Id
	@GeneratedValue
	@Column(name = "id")
	private int id;
	private String name;
	
	private String email;
	private String password;
	private String accountType; 
	private Long profileId;
	
	public UserDTO toDTO () {
		return new UserDTO(this.id, this.name, this.email, this.password, this.accountType, 
				this.profileId);
	}
}


