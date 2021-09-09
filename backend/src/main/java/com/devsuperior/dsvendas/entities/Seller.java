package com.devsuperior.dsvendas.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

//Annotation da JPA
@Entity
@Table(name = "tb_sallers")
public class Seller {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private Long id;
	private String name;
	
	// List é uma interface e o ArrayList é uma classe
	// Não é possível instanciar uma interface
	@OneToMany(mappedBy = "seller")
	private List<Sale> sales = new ArrayList<>(); // Coleções (sales)
	
	public Seller() {};

	public Seller(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	public Long getId() {
		return id;
	}
	public void setIg(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public List<Sale> getSales() {
		return sales;
	}

	@Override
	public String toString() {
		return "Seller [id=" + id + ", name=" + name + "]";
	}
}
