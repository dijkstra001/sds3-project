package com.ncorreia.dsvendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ncorreia.dsvendas.dto.GroupedSalesDto;
import com.ncorreia.dsvendas.dto.SalesDto;
import com.ncorreia.dsvendas.dto.SuccessIndicatorDto;
import com.ncorreia.dsvendas.entities.Sales;
import com.ncorreia.dsvendas.repositories.SalesRepository;
import com.ncorreia.dsvendas.repositories.SellerRepository;

@Service
public class SalesService {
	
	@Autowired
	public SalesRepository salesRepository;
	
	@Autowired
	public SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SalesDto> findAll(Pageable pageable) {
		sellerRepository.findAll();
		Page<Sales>  sales = salesRepository.findAll(pageable);
		return sales.map( x -> new SalesDto(x));
	}
	
	@Transactional(readOnly = true)
	public List<GroupedSalesDto> amountGroupedBySeller(){
		return salesRepository.amountGroupedBySeller();
	}

	public List<SuccessIndicatorDto> successIndicatorGroupedBySeller() {
		return salesRepository.successIndicatorGroupedBySeller();
	}
}
