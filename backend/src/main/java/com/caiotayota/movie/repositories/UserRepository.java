package com.caiotayota.movie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.caiotayota.movie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);

}
