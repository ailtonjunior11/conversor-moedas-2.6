const botaoConverter = document.getElementById("botao-converter"); // Mapeando o botão que irá converter a moeda
const selectMoedaConvertida = document.getElementById("moeda-converter-para"); // Mapeando o select onde o usuário irá escolher a moeda para a qual deseja converter
const selectMoedaParaConverter = document.getElementById("moeda-converter-de"); // Mapeando o select onde o usuário irá escolher a moeda que deseja converter

function converterMoeda() {
  const inputValor = parseFloat(
    document.querySelector(".input-converter-valor").value,
  ); // Mapeando o input onde o usuário irá inserir o valor que deseja converter.
  const valorMoedaParaConverter = document.getElementById(
    "valor-moeda-para-converter",
  ); // Mapeando o elemento onde irá aparecer o valor da moeda que o usuário deseja converter.
  const valorMoedaConvertida = document.getElementById(
    "valor-moeda-convertida",
  ); // Mapeando o elemento onde irá aparecer o valor da moeda convertida para a qual o usuário deseja converter.

  // Valores das moedas
  const realDoDia = 1.0;
  const dolarDoDia = 5.25;
  const euroDoDia = 6.2;
  const libraDoDia = 7.3;
  const bitcoinDoDia = 250000.0;

  if (inputValor === "" || isNaN(inputValor)) {
    valorMoedaParaConverter.innerHTML = "";
    valorMoedaConvertida.innerHTML = "";
    return;
  } // O código acima verifica se o valor inserido pelo usuário é vazio ou não é um número. Se for o caso, ele limpa os campos de valor da moeda para converter e da moeda convertida, e retorna para evitar que a função continue executando com um valor inválido.

  if (selectMoedaParaConverter.value === "real-br") {
    valorMoedaParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValor);
  } // O código acima verifica se o valor selecionado no select para converter é "real-br". Se for, ele formata o valor inserido pelo usuário como uma moeda brasileira (Real) usando a API Intl.NumberFormat e exibe o resultado no elemento valorMoedaParaConverter.

  if (selectMoedaParaConverter.value === "dolar-us") {
    valorMoedaParaConverter.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValor);
  } // O código acima verifica se o valor selecionado no select para converter é "dolar-us". Se for, ele formata o valor inserido pelo usuário como uma moeda americana (Dólar) usando a API Intl.NumberFormat e exibe o resultado no elemento valorMoedaParaConverter.

  if (selectMoedaParaConverter.value === "euro") {
    valorMoedaParaConverter.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValor);
  } // O código acima verifica se o valor selecionado no select para converter é "euro". Se for, ele formata o valor inserido pelo usuário como uma moeda europeia (Euro) usando a API Intl.NumberFormat e exibe o resultado no elemento valorMoedaParaConverter.

  if (selectMoedaParaConverter.value === "libra") {
    valorMoedaParaConverter.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputValor);
  } // O código acima verifica se o valor selecionado no select para converter é "libra". Se for, ele formata o valor inserido pelo usuário como uma moeda britânica (Libra Esterlina) usando a API Intl.NumberFormat e exibe o resultado no elemento valorMoedaParaConverter.

  if (selectMoedaParaConverter.value === "bitcoin") {
    valorMoedaParaConverter.innerHTML = inputValor.toFixed(8) + " ₿";
  } // O código acima verifica se o valor selecionado no select para converter é "bitcoin". Se for, ele formata o valor inserido pelo usuário como um número com 8 casas decimais e adiciona o símbolo do Bitcoin (₿) ao final, exibindo o resultado no elemento valorMoedaParaConverter.

  let valorEmReal = inputValor;
  if (selectMoedaParaConverter.value === "dolar-us") {
    valorEmReal = inputValor * dolarDoDia;
  } else if (selectMoedaParaConverter.value === "euro") {
    valorEmReal = inputValor * euroDoDia;
  } else if (selectMoedaParaConverter.value === "libra") {
    valorEmReal = inputValor * libraDoDia;
  } else if (selectMoedaParaConverter.value === "bitcoin") {
    valorEmReal = inputValor * bitcoinDoDia;
  } // O código acima converte o valor inserido pelo usuário para reais, multiplicando o valor pelo valor da moeda correspondente. Se a moeda selecionada for o real, o valor permanece o mesmo.

  if (selectMoedaConvertida.value == "dolar-us") {
    valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valorEmReal / dolarDoDia);
  } // O código acima verifica se o valor selecionado no select para converter é "dolar-us". Se for, ele converte o valor em reais para dólares dividindo o valor em reais pelo valor do dólar do dia, formata o resultado como uma moeda americana (Dólar) usando a API Intl.NumberFormat e exibe o resultado no elemento valorMoedaConvertida.

  if (selectMoedaConvertida.value == "real-br") {
    valorMoedaConvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valorEmReal / realDoDia);
  } // O código acima verifica se o valor selecionado no select para converter é "real-br". Se for, ele converte o valor em reais para reais (o que na prática não altera o valor) dividindo o valor em reais pelo valor do real do dia, formata o resultado como uma moeda brasileira (Real) usando a API Intl.NumberFormat e exibe o resultado no elemento valorMoedaConvertida.

  if (selectMoedaConvertida.value == "euro") {
    valorMoedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorEmReal / euroDoDia);
  } // O código acima verifica se o valor selecionado no select para converter é "euro". Se for, ele converte o valor em reais para euros dividindo o valor em reais pelo valor do euro do dia, formata o resultado como uma moeda europeia (Euro) usando a API Intl.NumberFormat e exibe o resultado no elemento valorMoedaConvertida.

  if (selectMoedaConvertida.value == "libra") {
    valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valorEmReal / libraDoDia);
  } // O código acima verifica se o valor selecionado no select para converter é "libra". Se for, ele converte o valor em reais para libras esterlinas dividindo o valor em reais pelo valor da libra do dia, formata o resultado como uma moeda britânica (Libra Esterlina) usando a API Intl.NumberFormat e exibe o resultado no elemento valorMoedaConvertida.

  if (selectMoedaConvertida.value == "bitcoin") {
    valorMoedaConvertida.innerHTML =
      (valorEmReal / bitcoinDoDia).toFixed(8) + " ₿";
  } // O código acima verifica se o valor selecionado no select para converter é "bitcoin". Se for, ele converte o valor em reais para bitcoins dividindo o valor em reais pelo valor do bitcoin do dia, formata o resultado como um número com 8 casas decimais e adiciona o símbolo do Bitcoin (₿) ao final, exibindo o resultado no elemento valorMoedaConvertida.
}
// A função converterMoeda é responsável por realizar a conversão da moeda com base no valor inserido pelo usuário e nas moedas selecionadas nos selects. Ela utiliza a API Intl.NumberFormat para formatar o valor convertido de acordo com o formato de moeda correspondente.

function atualizarMoedaConvertida() {
  const imgMoedaConvertida = document.getElementById("logo-moeda-convertida"); // Mapeando a imagem onde irá aparecer a bandeira da moeda para a qual o usuário deseja converter
  const spanNomeMoedaConvertida = document.getElementById(
    "nome-moeda-convertida",
  ); // Mapeando o span onde irá aparecer o nome da moeda para a qual o usuário deseja converter

  if (selectMoedaConvertida.value == "dolar-us") {
    imgMoedaConvertida.src = "img/logo-usd.png";
    spanNomeMoedaConvertida.innerHTML = "Dólar Americano";
  } // O código acima verifica se o valor selecionado no select é "dolar-us". Se for, ele altera a imagem da bandeira para a do dólar americano e atualiza o nome da moeda para "Dólar Americano".

  if (selectMoedaConvertida.value == "real-br") {
    imgMoedaConvertida.src = "img/logo-br.png";
    spanNomeMoedaConvertida.innerHTML = "Real Brasileiro";
  } // O código acima verifica se o valor selecionado no select é "real-br". Se for, ele altera a imagem da bandeira para a do real brasileiro e atualiza o nome da moeda para "Real Brasileiro".

  if (selectMoedaConvertida.value == "euro") {
    imgMoedaConvertida.src = "img/logo-euro.png";
    spanNomeMoedaConvertida.innerHTML = "Euro";
  } // O código acima verifica se o valor selecionado no select é "euro". Se for, ele altera a imagem da bandeira para a do euro e atualiza o nome da moeda para "Euro".

  if (selectMoedaConvertida.value == "libra") {
    imgMoedaConvertida.src = "img/logo-libra.png";
    spanNomeMoedaConvertida.innerHTML = "Libra Esterlina";
  } // O código acima verifica se o valor selecionado no select é "libra". Se for, ele altera a imagem da bandeira para a da libra esterlina e atualiza o nome da moeda para "Libra Esterlina".

  if (selectMoedaConvertida.value == "bitcoin") {
    imgMoedaConvertida.src = "img/logo-bitcoin.png";
    spanNomeMoedaConvertida.innerHTML = "Bitcoin";
  } // O código acima verifica se o valor selecionado no select é "bitcoin". Se for, ele altera a imagem da bandeira para a do Bitcoin e atualiza o nome da moeda para "Bitcoin".

  converterMoeda(); // Chamando a função converterMoeda para que o valor seja convertido automaticamente sempre que o usuário selecionar uma moeda diferente no select. Isso garante que a conversão seja atualizada imediatamente com base na nova moeda selecionada.
}
// A função atualizarMoedaConvertida é responsável por atualizar a imagem da bandeira e o nome da moeda para a qual o usuário deseja converter, com base na opção selecionada no select.

function atualizarMoedaParaConverter() {
  const imgMoedaParaConverter = document.getElementById(
    "logo-moeda-para-converter",
  ); // Mapeando a imagem onde irá aparecer a bandeira da moeda que o usuário deseja converter
  const spanNomeMoedaParaConverter = document.getElementById(
    "nome-moeda-para-converter",
  ); // Mapeando o span onde irá aparecer o nome da moeda que o usuário deseja converter

  if (selectMoedaParaConverter.value == "real-br") {
    imgMoedaParaConverter.src = "img/logo-br.png";
    spanNomeMoedaParaConverter.innerHTML = "Real Brasileiro";
  } // O código acima verifica se o valor selecionado no select é "real-br". Se for, ele altera a imagem da bandeira para a do real brasileiro e atualiza o nome da moeda para "Real Brasileiro".

  if (selectMoedaParaConverter.value == "dolar-us") {
    imgMoedaParaConverter.src = "img/logo-usd.png";
    spanNomeMoedaParaConverter.innerHTML = "Dólar Americano";
  } // O código acima verifica se o valor selecionado no select é "dolar-us". Se for, ele altera a imagem da bandeira para a do dólar americano e atualiza o nome da moeda para "Dólar Americano".

  if (selectMoedaParaConverter.value == "euro") {
    imgMoedaParaConverter.src = "img/logo-euro.png";
    spanNomeMoedaParaConverter.innerHTML = "Euro";
  } // O código acima verifica se o valor selecionado no select é "euro". Se for, ele altera a imagem da bandeira para a do euro e atualiza o nome da moeda para "Euro".

  if (selectMoedaParaConverter.value == "libra") {
    imgMoedaParaConverter.src = "img/logo-libra.png";
    spanNomeMoedaParaConverter.innerHTML = "Libra Esterlina";
  } // O código acima verifica se o valor selecionado no select é "libra". Se for, ele altera a imagem da bandeira para a da libra esterlina e atualiza o nome da moeda para "Libra Esterlina".

  if (selectMoedaParaConverter.value == "bitcoin") {
    imgMoedaParaConverter.src = "img/logo-bitcoin.png";
    spanNomeMoedaParaConverter.innerHTML = "Bitcoin";
  } // O código acima verifica se o valor selecionado no select é "bitcoin". Se for, ele altera a imagem da bandeira para a do Bitcoin e atualiza o nome da moeda para "Bitcoin".

  converterMoeda(); // Chamando a função converterMoeda para que o valor seja convertido automaticamente sempre que o usuário selecionar uma moeda diferente no select. Isso garante que a conversão seja atualizada imediatamente com base na nova moeda selecionada.
}
// A função atualizarMoedaParaConverter é responsável por atualizar a imagem da bandeira e o nome da moeda que o usuário deseja converter, com base na opção selecionada no select.

selectMoedaParaConverter.addEventListener(
  "change",
  atualizarMoedaParaConverter,
); // Adicionando um evento de mudança (change) ao select para que a função atualizarMoedaParaConverter seja chamada sempre que o usuário selecionar uma moeda diferente.

selectMoedaConvertida.addEventListener("change", atualizarMoedaConvertida); // Adicionando um evento de mudança (change) ao select para que a função atualizarMoedaConvertida seja chamada sempre que o usuário selecionar uma moeda diferente.
botaoConverter.addEventListener("click", converterMoeda); // Adicionando um evento de clique (click) ao botão para que a função converterMoeda seja chamada sempre que o usuário clicar no botão de converter.
