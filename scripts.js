const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = Number(document.querySelector(".input-currency").value);
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");

  const dolarToday = 5.2;
  const euroToday = 6.2;

  // Exibe valor em Real corretamente
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  let convertedValue = 0;

  if (currencySelect.value === "dolar") {
    convertedValue = inputCurrencyValue / dolarToday;
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(convertedValue);
  }

  if (currencySelect.value === "euro") {
    convertedValue = inputCurrencyValue / euroToday;
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(convertedValue);
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.getElementById("bandeira-destino");

  if (currencySelect.value === "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "assets/estados-unidos.png"; // ✅ caminho simples e consistente
    currencyImage.alt = "Bandeira dos Estados Unidos";
  }

  if (currencySelect.value === "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "assets/euro.png";
    currencyImage.alt = "Bandeira da União Europeia";
  }

  convertValues(); 
}

// Eventos
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);


























