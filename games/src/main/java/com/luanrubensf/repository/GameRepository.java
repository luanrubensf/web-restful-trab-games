package com.luanrubensf.repository;


import com.luanrubensf.models.Game;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends CrudRepository<Game, Long> {
}
