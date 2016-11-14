package com.luanrubensf.repository;

import com.luanrubensf.models.Categoria;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Rubens on 13/11/2016.
 */
@Repository
public interface CategoriaRepository extends CrudRepository<Categoria, Long> {

}
