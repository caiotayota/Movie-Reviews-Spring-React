package com.caiotayota.movie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.caiotayota.movie.entities.Score;
import com.caiotayota.movie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	


}
