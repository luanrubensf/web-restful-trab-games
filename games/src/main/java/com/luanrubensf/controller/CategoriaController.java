package com.luanrubensf.controller;

import com.luanrubensf.models.Categoria;
import com.luanrubensf.repository.CategoriaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.inject.Inject;
import java.util.List;

@RestController
public class CategoriaController {

    @Inject
    CategoriaRepository categoriaRepository;

    @RequestMapping(value = "/categoria/{id}", method = RequestMethod.GET)
    public ResponseEntity<Categoria> getCategoria(@PathVariable("id") Long id){
        Categoria categoria = categoriaRepository.findOne(id);
        return new ResponseEntity<>(categoria, HttpStatus.OK);
    }

    @RequestMapping(value = "categoria", method = RequestMethod.POST)
    public ResponseEntity<Categoria> saveCategoria(@RequestBody Categoria categoria){
        return new ResponseEntity<>(categoriaRepository.save(categoria), HttpStatus.OK);
    }

    @RequestMapping(value = "categoria", method = RequestMethod.GET)
    public ResponseEntity<List<Categoria>> getAll(){

        List<Categoria> categoriaList = (List<Categoria>) categoriaRepository.findAll();
        return new ResponseEntity<List<Categoria>>(categoriaList, HttpStatus.OK);
    }

    @RequestMapping(value = "categoria", method = RequestMethod.PUT)
    public ResponseEntity<Categoria> update(@RequestBody Categoria categoria){
        return new ResponseEntity<>(categoriaRepository.save(categoria), HttpStatus.OK);
    }

    @RequestMapping(value = "categoria", method = RequestMethod.DELETE)
    public void delete(@RequestParam(value = "id") Long id){
        categoriaRepository.delete(id);
    }
}
