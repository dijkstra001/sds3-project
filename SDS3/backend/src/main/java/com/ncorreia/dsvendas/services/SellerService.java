package com.ncorreia.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ncorreia.dsvendas.dto.SellerDto;
import com.ncorreia.dsvendas.entities.Seller;
import com.ncorreia.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	public SellerRepository sellerRepository;
	
	public List<SellerDto> findAll() {
		List<Seller>  sellers = sellerRepository.findAll();
		return sellers.stream().map( x -> new SellerDto(x)).collect(Collectors.toList());
	}
}
