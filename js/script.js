{
    const currencyElement = document.querySelector(".js-currency")
    const formElement = document.querySelector(".js-form");
    const resultElement = document.querySelector(".js-result");
    const amountElement = document.querySelector(".js-amount")

    const calculateResult = (currency) => {
        const rateEUR = 4.31;
        const rateGPB = 5.05;
        const rateUSD = 3.97;

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
    }



    formElement.addEventListener("submit", (event) => {
        event.preventDefault(); // zapobiega wysłaniu formularza przy przeładowaniu się strony, czyli wysyła dopiero po wciśnięciu guzika

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result;




        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
    });
}