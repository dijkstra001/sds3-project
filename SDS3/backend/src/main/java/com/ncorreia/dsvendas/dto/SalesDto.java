package com.ncorreia.dsvendas.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.ncorreia.dsvendas.entities.Sales;

public class SalesDto implements Serializable{
	private static final long serialVersionUID = 1L;
	private Long id;
	private Integer visited;
	private Integer deals;
	private Double amount;
	private LocalDate date;
	
	private SellerDto seller;
	
	public SalesDto() {}

	public SalesDto(Long id, Integer visited, Integer deals, Double amount, LocalDate date, SellerDto seller) {
		this.id = id;
		this.visited = visited;
		this.deals = deals;
		this.amount = amount;
		this.date = date;
		this.seller = seller;
	}
	
	public SalesDto(Sales sales) {
		this.id = sales.getId();
		this.visited = sales.getVisited();
		this.deals = sales.getDeals();
		this.amount = sales.getAmount();
		this.date = sales.getDate();
		this.seller = new SellerDto(sales.getSeller());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getVisited() {
		return visited;
	}

	public void setVisited(Integer visited) {
		this.visited = visited;
	}

	public Integer getDeals() {
		return deals;
	}

	public void setDeals(Integer deals) {
		this.deals = deals;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public SellerDto getSeller() {
		return seller;
	}

	public void setSeller(SellerDto seller) {
		this.seller = seller;
	}
}
