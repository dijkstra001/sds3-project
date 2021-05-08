package com.ncorreia.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ncorreia.dsvendas.dto.GroupedSalesDto;
import com.ncorreia.dsvendas.dto.SalesDto;
import com.ncorreia.dsvendas.dto.SuccessIndicatorDto;
import com.ncorreia.dsvendas.services.SalesService;

@RestController
@RequestMapping(value = "/sales")
public class SalesController {
	
	@Autowired
	private SalesService salesService;
	
	@GetMapping(value = "/findAll")
	public ResponseEntity<Page<SalesDto>> findAll(Pageable pageable){
		Page<SalesDto> pageSales = salesService.findAll(pageable);
		return ResponseEntity.ok(pageSales);
	}
	
	@GetMapping(value = "/amountGroupedBySeller")
	public ResponseEntity<List<GroupedSalesDto>> amountGroupedBySeller(){
		List<GroupedSalesDto> amountGroupedBySeller =  salesService.amountGroupedBySeller();
		return ResponseEntity.ok(amountGroupedBySeller);
	}
	
	@GetMapping(value = "/successIndicatorBySeller")
	public ResponseEntity<List<SuccessIndicatorDto>> successIndicatorGroupedBySeller(){
		List<SuccessIndicatorDto> successIndicator =  salesService.successIndicatorGroupedBySeller();
		return ResponseEntity.ok(successIndicator);
	}

}
