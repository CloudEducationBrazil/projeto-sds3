package com.devsuperior.dsvendas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.service.SaleService;

// endpoints
//http://localhost:8080/sales (lista os 20 primeiros default)
//http://localhost:8080/sales?page=1 (Lista a pag 1)
//http://localhost:8080/sales?page=1&size=10 (pag 1 Lista de 10 em 10 regs)
//(Pag 1 Lista de 10 em 10 regs ordenado pelo campo Date)
//http://localhost:8080/sales?page=1&size=10&sort=date 
//(Decrescente Pag 1 Lista de 10 em 10 regs ordenado pelo campo Date)
//http://localhost:8080/sales?page=1&size=10&sort=date,desc

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;

	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
		Page<SaleDTO> page = service.findAll(pageable);
		return ResponseEntity.ok(page);
	}
}