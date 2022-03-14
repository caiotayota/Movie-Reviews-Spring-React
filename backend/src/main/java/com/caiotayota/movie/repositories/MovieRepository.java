package com.caiotayota.movie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.caiotayota.movie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
