let currencyElement = document.querySelector(".js-currency")
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let amountElement = document.querySelector(".js-amount")

let rateEUR = 4.31;
let rateGPB = 5.05;
let rateUSD = 3.97;

formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // zapobiega wysłaniu formularza przy przeładowaniu się strony, czyli wysyła dopiero po wciśnięciu guzika

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

switch (currency) {
    case "EUR":
    result = amount / rateEUR;
    break;

    case "GPB":
    result = amount / rateGPB;
    break;

    case "USD":
    result = amount / rateUSD;
    break;
}


    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
});