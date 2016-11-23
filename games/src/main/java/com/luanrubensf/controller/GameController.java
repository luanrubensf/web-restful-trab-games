package com.luanrubensf.controller;

import com.luanrubensf.models.Game;
import com.luanrubensf.repository.GameRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import java.util.List;

@RestController
public class GameController {

    @Inject
    GameRepository gameRepository;

    @CrossOrigin
    @RequestMapping(value = "/game", method = RequestMethod.POST)
    public ResponseEntity<Game> save(@RequestBody Game game){
        return new ResponseEntity<>(gameRepository.save(game), HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/game/{id}", method = RequestMethod.GET)
    public ResponseEntity<Game> get(@PathVariable(value = "id") Long id){
        return new ResponseEntity<>(gameRepository.findOne(id), HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/game", method = RequestMethod.GET)
    public ResponseEntity<List<Game>> getAll(){
        List<Game> games = (List<Game>) gameRepository.findAll();
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/game", method = RequestMethod.PUT)
    public ResponseEntity<Game> update(@RequestBody Game game){
        return new ResponseEntity<>(gameRepository.save(game), HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value = "/game", method = RequestMethod.DELETE)
    public void delete(@RequestParam(value = "id") Long id){
        gameRepository.delete(id);
    }
}
