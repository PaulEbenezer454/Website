function convertCurrency() {
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;

    if (!amount) {
        document.getElementById("result").innerHTML = "";
        return;
    }

    // Example fixed exchange rates
    let rates = {
        "USD": 1,
        "INR": 83.3,
        "EUR": 0.92,
        "GBP": 0.78
    };

    // Convert to USD
    let amountInUSD = amount / rates[fromCurrency];
    // Convert to target currency
    let convertedAmount = amountInUSD * rates[toCurrency];
    convertedAmount = convertedAmount.toFixed(2);

    document.getElementById("result").innerHTML = 
        `Converted Amount: ${convertedAmount} ${toCurrency}`;
}
