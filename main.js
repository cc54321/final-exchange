
let currencies = document.querySelector('#currency-pair');
let currencyForm = document.querySelector("#currency-form");
let currencyInput = document.querySelector("#currency-input");
let exchangeRate = document.querySelector('#exchange-rate');



//https://api.api-ninjas.com/v1/exchangerate?pair=
// url: 'https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR'
//KEY= vba/K2DVf9EJ+xHNbnqvCg==viklDz9EDm221QfL
/*HTTP GET
Returns the exchange rate for a given currency pair.

Parameters
pair (required) - currency pair to query. Must be in the form of (currency1)_(currency2) (e.g. USD_EUR)

Headers
X-Api-Key (required) - API Key associated with your account.



$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR',
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
*/
currencyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log(input.value)
    fetch(`https://api.api-ninjas.com/v1/exchangerate?pair=${currencyInput.value}`, {
    method  : 'get',
    headers : new Headers({
        'Content-Type': 'application/json',
        'X-Api-Key': 'vba/K2DVf9EJ+xHNbnqvCg==viklDz9EDm221QfL'
    })
}).then( response => {
    return response.json(); 
}).then(data => {
            console.log(data)
           

            //currencies.innerText = input.value
            currencies.innerHTML = data.currency-pair;
            exchangeRate.innerHTML = data.exchange-rate;
            description.innerHTML = data.description;

        });
});
