package com.jss.dto;

import com.jss.entity.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor


public class UserDTO {

	private int id;
	@NotBlank(message="{user.name.absent}")
	private String name;
	@NotBlank(message="{user.email.absent}")
	@Email(message="{user.email.invalid}")
	private String email;
	@NotBlank(message="{user.password.absent}")
	private String password;
	private String accountType; 
	private Long profileId;
	
	public User toEntity() {
		return new User(this.id, this.name, this.email, this.password, this.accountType, this.profileId);
	}
}
