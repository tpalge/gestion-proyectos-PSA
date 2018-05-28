$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("debito.feature");
formatter.feature({
  "id": "debito-de-fondos",
  "description": "",
  "name": "Debito de fondos",
  "keyword": "Característica",
  "line": 2,
  "comments": [
    {
      "value": "# language: es",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "debito-de-fondos;caja-de-ahorro-con-saldo-suficiente",
  "description": "",
  "name": "Caja de ahorro con saldo suficiente",
  "keyword": "Escenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "que mi caja de ahorro tiene un saldo de \"100\" pesos",
  "keyword": "Dado ",
  "line": 5
});
formatter.step({
  "name": "cuando debito \"50\" pesos",
  "keyword": "Cuando ",
  "line": 6
});
formatter.step({
  "name": "el saldo final es de \"50\" pesos",
  "keyword": "Entonces ",
  "line": 7
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 41
    }
  ],
  "location": "DebitoSteps.que_mi_caja_de_ahorro_tiene_un_saldo_de_pesos(int)"
});
formatter.result({
  "duration": 81666730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 15
    }
  ],
  "location": "DebitoSteps.cuando_debito_pesos(int)"
});
formatter.result({
  "duration": 127876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 22
    }
  ],
  "location": "DebitoSteps.el_saldo_final_es_de_pesos(int)"
});
formatter.result({
  "duration": 1457959,
  "status": "passed"
});
formatter.scenario({
  "id": "debito-de-fondos;caja-de-ahorro-sin-saldo-suficiente",
  "description": "",
  "name": "Caja de ahorro sin saldo suficiente",
  "keyword": "Escenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "que mi caja de ahorro tiene un saldo de \"10\" pesos",
  "keyword": "Dado ",
  "line": 10
});
formatter.step({
  "name": "cuando debito \"20\" pesos",
  "keyword": "Cuando ",
  "line": 11
});
formatter.step({
  "name": "la operacion es rechazada y el saldo final es \"10\" pesos",
  "keyword": "Entonces ",
  "line": 12
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 41
    }
  ],
  "location": "DebitoSteps.que_mi_caja_de_ahorro_tiene_un_saldo_de_pesos(int)"
});
formatter.result({
  "duration": 113133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "DebitoSteps.cuando_debito_pesos(int)"
});
formatter.result({
  "duration": 105410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "DebitoSteps.la_operacion_es_rechazada_y_el_saldo_final_es_pesos(int)"
});
formatter.result({
  "duration": 119910,
  "status": "passed"
});
});