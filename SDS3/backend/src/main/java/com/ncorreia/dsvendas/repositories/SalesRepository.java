package com.ncorreia.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ncorreia.dsvendas.entities.Sales;

public interface SalesRepository extends JpaRepository<Sales, Long>{

}
