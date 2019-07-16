$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/locadora.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 2,
  "name": "Locadora",
  "description": "Como um usúario\r\nEu quero cadastrar aluguéis de filmes\r\nPara controlar preços e datas de entrega",
  "id": "locadora",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "Alugar filme com sucesso",
  "description": "",
  "id": "locadora;alugar-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 8,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "que o preço de aluguel seja R$3",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "o preço do aluguel será R$3",
  "keyword": "Então "
});
formatter.step({
  "line": 12,
  "name": "data de entrega será no dia seguinte",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "alugar_filme_steps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 69846200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "alugar_filme_steps.queOPreçoDeAluguelSejaR$(int)"
});
formatter.result({
  "duration": 55400,
  "status": "passed"
});
formatter.match({
  "location": "alugar_filme_steps.alugar()"
});
formatter.result({
  "duration": 420500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "alugar_filme_steps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 1018700,
  "status": "passed"
});
formatter.match({
  "location": "alugar_filme_steps.dataDeEntregaSeráNoDiaSeguinte()"
});
formatter.result({
  "duration": 77500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "alugar_filme_steps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 52900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Alugar filme sem estoque",
  "description": "",
  "id": "locadora;alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 16,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 17,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "não será possível alugar por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 19,
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "alugar_filme_steps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 91700,
  "status": "passed"
});
formatter.match({
  "location": "alugar_filme_steps.alugar()"
});
formatter.result({
  "duration": 60100,
  "status": "passed"
});
formatter.match({
  "location": "alugar_filme_steps.nãoSeráPossívelAlugarPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "alugar_filme_steps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 42900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 21,
      "value": "################Esquema do Cenário####################"
    }
  ],
  "line": 22,
  "name": "Dar condição de aluguel",
  "description": "",
  "id": "locadora;dar-condição-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "um filme com estoque de \u003cunidade\u003e unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "que o preço de aluguel seja R$\u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "o preço do aluguel será R$\u003cpreco2\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 27,
  "name": "data de entrega será no dia seguinte",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "o estoque do filme será \u003cunidade2\u003e unidade",
  "keyword": "E "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "locadora;dar-condição-de-aluguel;",
  "rows": [
    {
      "cells": [
        "unidade",
        "preco",
        "preco2",
        "unidade2"
      ],
      "line": 31,
      "id": "locadora;dar-condição-de-aluguel;;1"
    },
    {
      "cells": [
        "2",
        "3",
        "3",
        "1"
      ],
      "line": 32,
      "id": "locadora;dar-condição-de-aluguel;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 32,
  "name": "Dar condição de aluguel",
  "description": "",
  "id": "locadora;dar-condição-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 23,
  "name": "um filme com estoque de 2 unidades",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "que o preço de aluguel seja R$3",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "o preço do aluguel será R$3",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 27,
  "name": "data de entrega será no dia seguinte",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "o estoque do filme será 1 unidade",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "alugar_filme_steps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 62100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 30
    }
  ],
  "location": "alugar_filme_steps.queOPreçoDeAluguelSejaR$(int)"
});
formatter.result({
  "duration": 45800,
  "status": "passed"
});
formatter.match({
  "location": "alugar_filme_steps.alugar()"
});
formatter.result({
  "duration": 47400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "alugar_filme_steps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 39600,
  "status": "passed"
});
formatter.match({
  "location": "alugar_filme_steps.dataDeEntregaSeráNoDiaSeguinte()"
});
formatter.result({
  "duration": 52800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "alugar_filme_steps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 39100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 34,
      "value": "################Data Table####################"
    }
  ],
  "line": 35,
  "name": "Alugar filme com sucesso DataTable",
  "description": "",
  "id": "locadora;alugar-filme-com-sucesso-datatable",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 36,
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 37
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 38
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 39,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "o preço do aluguel será R$3",
  "keyword": "Então "
});
formatter.step({
  "line": 41,
  "name": "data de entrega será no dia seguinte",
  "keyword": "E "
});
formatter.step({
  "line": 42,
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "alugar_filme_steps.umFilme(DataTable)"
});
formatter.result({
  "duration": 1401500,
  "status": "passed"
});
formatter.match({
  "location": "alugar_filme_steps.alugar()"
});
formatter.result({
  "duration": 49100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "alugar_filme_steps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 47000,
  "status": "passed"
});
formatter.match({
  "location": "alugar_filme_steps.dataDeEntregaSeráNoDiaSeguinte()"
});
formatter.result({
  "duration": 57000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "alugar_filme_steps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "duration": 57800,
  "status": "passed"
});
});