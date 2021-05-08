package com.ncorreia.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ncorreia.dsvendas.dto.GroupedSalesDto;
import com.ncorreia.dsvendas.dto.SuccessIndicatorDto;
import com.ncorreia.dsvendas.entities.Sales;

public interface SalesRepository extends JpaRepository<Sales, Long>{
	
	@Query("SELECT new com.ncorreia.dsvendas.dto.GroupedSalesDto (obj.seller, SUM(obj.amount)) "
			+ " FROM Sales AS obj GROUP BY obj.seller")
	List<GroupedSalesDto> amountGroupedBySeller();
	
	@Query("SELECT new com.ncorreia.dsvendas.dto.SuccessIndicatorDto (obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ " FROM Sales AS obj GROUP BY obj.seller")
	List<SuccessIndicatorDto> successIndicatorGroupedBySeller();

}
