package br.ce.wcaquino.main;

import java.util.Calendar;

import br.ce.wcaquino.utils.DateUtils;

public class AlguelService {

	public NotaAluguel alugar(Filme filme) {
	 if (filme.getEstoque() == 0) 
		 throw new RuntimeException("Filme sem estoque");	
		NotaAluguel nota_aluguel = new NotaAluguel();
		nota_aluguel.setPreco(Filme.getAluguel());
		
		nota_aluguel.setDataEntrega(DateUtils.obterData(1));
		
		filme.setEstoque(filme.getEstoque() - 1);
		return nota_aluguel;
	}	
}