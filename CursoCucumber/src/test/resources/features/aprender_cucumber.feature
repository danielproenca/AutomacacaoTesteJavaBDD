# language: pt
Funcionalidade: Aprender Cucumber
	Como um Aluno
	Eu quero aprender utilizar o cucumber
	Para que eu possa automatizar critérios de aceitação

Cenário: Deve incrementar contator
 Dado que o valor do contador é 15
 Quando eu incrimentar em 3
 Então o valor do contador será 18
 
Cenário: Deve calcular atraso na entrega
	Dado que a entrega é dia 05/04/2018
	Quando a entrega atrasar em 2 dias
	Então a entrega será efetuada em 07/04/2018