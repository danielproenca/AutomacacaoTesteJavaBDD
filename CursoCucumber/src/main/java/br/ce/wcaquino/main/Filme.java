package br.ce.wcaquino.main;

public class Filme {
	
	private int estoque;
	static int aluguel;
	
	public void setEstoque(int qtd_estoque) {
		this.estoque = qtd_estoque;
	}

	public void setAluguel(int aluguel) {
		this.aluguel = aluguel;
	}

	public static int getAluguel() {
		return aluguel;
	}

	public int getEstoque() {
		return estoque;
	}
}