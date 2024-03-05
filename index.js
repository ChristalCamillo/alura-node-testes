/* eslint-disable no-console */
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

// faremos uma func de teste mais generica
const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou`);
  } catch {
    console.error(`${titulo} nao passou`);
  }
};

teste('somaHorasExtras', () => {
  const valorEsperado = 2500;
  const valorRetornado = somaHorasExtras(2000, 500);

  verifiqueSe(valorRetornado).ehExatamenteIgualA(valorEsperado);
});

teste('calculaDesconto', () => {
  const valorEsperado = 2300;
  const valorRetornado = calculaDescontos(2500, 200);

  verifiqueSe(valorRetornado).ehExatamenteIgualA(valorEsperado);
});
