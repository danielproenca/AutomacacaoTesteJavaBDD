# language: pt
Funcionalidade: Locadora
	Como um usúario
	Eu quero cadastrar aluguéis de filmes
	Para controlar preços e datas de entrega
	
Cenário: Alugar filme com sucesso
	Dado um filme com estoque de 2 unidades
	E que o preço de aluguel seja R$3
	Quando alugar
	Então o preço do aluguel será R$3
	E data de entrega será no dia seguinte
	E o estoque do filme será 1 unidade
	
Cenário: Alugar filme sem estoque
	Dado um filme com estoque de 0 unidades
	Quando alugar
	Então não será possível alugar por falta de estoque
	E o estoque do filme será 0 unidade
	
################Esquema do Cenário####################
Esquema do Cenário: Dar condição de aluguel
	Dado um filme com estoque de <unidade> unidades
	E que o preço de aluguel seja R$<preco>
	Quando alugar
	Então o preço do aluguel será R$<preco2>
	E data de entrega será no dia seguinte
	E o estoque do filme será <unidade2> unidade

Exemplos:	
	| unidade | preco | preco2 | unidade2 |
	|    2    |   3   |    3   |    1     |
	
################Data Table####################
Cenário: Alugar filme com sucesso DataTable
	Dado um filme
		| estoque | 2 |
		| preco   | 3 |
	Quando alugar
	Então o preço do aluguel será R$3
	E data de entrega será no dia seguinte
	E o estoque do filme será 1 unidade