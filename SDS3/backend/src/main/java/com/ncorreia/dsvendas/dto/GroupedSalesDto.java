package com.ncorreia.dsvendas.dto;

import java.io.Serializable;

import com.ncorreia.dsvendas.entities.Seller;

public class GroupedSalesDto implements Serializable{
	private static final long serialVersionUID = 1L;
	private String sellerName;
	private Double sumSales;
	
	public GroupedSalesDto() {}

	public GroupedSalesDto(Seller seller, Double sumSales) {
		this.sellerName = seller.getName();
		this.sumSales = sumSales;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(Seller seller) {
		this.sellerName = seller.getName();
	}

	public Double getSumSales() {
		return sumSales;
	}

	public void setSumSales(Double sumSales) {
		this.sumSales = sumSales;
	}
}
