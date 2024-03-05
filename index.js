const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

// usaremos asserções como forma de comparar true ou false.
const verifiqueSe = (valor) => {
  // vamos guardar todos os testes aqui
  const assercoes = {
    ehExatamenteIgualA(valorEsperado) {
      if (valor !== valorEsperado) {
        // eslint-disable-next-line no-throw-literal
        throw {};
      }
    },
  };
  return assercoes;
};

const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(`${titulo} passou`);
  } else {
    console.error(`${titulo} não passou`);
  }
};

teste('somaHorasExtras', 2500, somaHorasExtras(2000, 500));

teste('calculaDesconto', 2200, calculaDescontos(2500, 300));
