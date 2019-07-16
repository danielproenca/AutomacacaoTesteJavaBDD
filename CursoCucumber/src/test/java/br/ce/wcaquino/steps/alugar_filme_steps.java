package br.ce.wcaquino.steps;

import static org.junit.Assert.assertEquals;

import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import br.ce.wcaquino.main.AlguelService;
import br.ce.wcaquino.main.Filme;
import br.ce.wcaquino.main.NotaAluguel;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class alugar_filme_steps {
	
	private Filme filme = new Filme();
	private AlguelService aluguel_serv = new AlguelService();
	private NotaAluguel nota_aluguel = new NotaAluguel();
	private String erro;
	
	//Data Table
	@Dado("^um filme$")
	public void umFilme(DataTable table) throws Throwable {
		Map<String, String> map = table.asMap(String.class, String.class);
		filme.setEstoque(Integer.parseInt(map.get("estoque")));
		filme.setAluguel(Integer.parseInt(map.get("preco")));
	}
	
	@Dado("^um filme com estoque de (\\d+) unidades$")
	public void umFilmeComEstoqueDeUnidades(int qtd_estoque) throws Throwable {
		filme.setEstoque(qtd_estoque);
	}

	@Dado("^que o preço de aluguel seja R\\$(\\d+)$")
	public void queOPreçoDeAluguelSejaR$(int preco) throws Throwable {
		filme.setAluguel(preco);
	}

	@Quando("^alugar$")
	public void alugar() throws Throwable {
		try {
			nota_aluguel = aluguel_serv.alugar(filme);	
		} catch (RuntimeException e) {
			erro = e.getMessage();
		}
	}

	@Então("^o preço do aluguel será R\\$(\\d+)$")
	public void oPreçoDoAluguelSeráR$(int preco_correto) throws Throwable {
		assertEquals(preco_correto, nota_aluguel.getPreco());
	}

	@Então("^data de entrega será no dia seguinte$")
	public void dataDeEntregaSeráNoDiaSeguinte() throws Throwable {
	    Calendar cal = Calendar.getInstance();
	    cal.add(Calendar.DAY_OF_MONTH, 1);
	    
	    Date dataRetorno = nota_aluguel.getDataEntrega();
	    Calendar calRetorno = Calendar.getInstance();
	    
	    calRetorno.setTime(dataRetorno);
	    assertEquals(cal.get(Calendar.DAY_OF_MONTH), calRetorno.get(Calendar.DAY_OF_MONTH));
	}

	@Então("^o estoque do filme será (\\d+) unidade$")
	public void oEstoqueDoFilmeSeráUnidade(int qtd_estoque) throws Throwable {
	    assertEquals(qtd_estoque, filme.getEstoque());
	}
	
	@Então("^não será possível alugar por falta de estoque$")
	public void nãoSeráPossívelAlugarPorFaltaDeEstoque() throws Throwable {
	    assertEquals("Filme sem estoque", erro);
	}
}
