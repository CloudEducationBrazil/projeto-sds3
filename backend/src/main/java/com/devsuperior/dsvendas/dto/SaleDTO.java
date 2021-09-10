package com.devsuperior.dsvendas.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.devsuperior.dsvendas.entities.Sale;

public class SaleDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Integer visited;
	private Double amount;
	private LocalDate date;

	public SaleDTO() {
	}

	
	public SaleDTO(Long id, Integer visited, Double amount, LocalDate date) {
		this.id = id;
		this.visited = visited;
		this.amount = amount;
		this.date = date;
	}


//	id = entity.getId();
//	name = entity.getName();
	
	public SaleDTO(Sale entity) {
		id = entity.getId();
		visited = entity.visited;
		amount = entity.amount;
		date = entity.date;
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


	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
