package com.devsuperior.dsvendas.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

// Mapeamento de objetos, pois os paradigmas de banco de dados são diferentes.
// Java o banco de dados é orientado a objetos e o postGree é relacional

// Annotation da JPA
@Entity
@Table(name = "tb_sales")
public class Sale {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Integer visited;
	private Double amount;
	private LocalDate date;
	
	@ManyToOne
	@JoinColumn(name = "seler_id")	
	private Seller seller; 	// Composição de objetos
	
	public Sale() {
	}

	public Sale(Long id, Integer visited, Double amount, LocalDate date, Seller seller) {
		this.id = id;
		this.visited = visited;
		this.amount = amount;
		this.date = date;
		this.seller = seller;
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

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	@Override
	public String toString() {
		return "Sale [id=" + id + ", visited=" + visited + ", amount=" + amount + ", date=" + date + ", seller="
				+ seller + "]";
	}
}
