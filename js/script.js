{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.31;
        const rateGPB = 5.05;
        const rateUSD = 3.97;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "GPB":
                return amount / rateGPB;

            case "USD":
                return amount / rateUSD;

        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault(); // zapobiega wysłaniu formularza przy przeładowaniu się strony, czyli wysyła dopiero po wciśnięciu guzika

        const currencyElement = document.querySelector(".js-currency");

        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };


    init();
}