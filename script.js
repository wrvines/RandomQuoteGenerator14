"use strict";
//alert("connected");
document.querySelector("#btn-quote").addEventListener('click', getQuote);
const randomQuote = document.querySelector("#random-quote")


function getQuote() {
    let num = Math.random() * 7268;
    let page = Math.ceil(num);
    let url = "https://quote-garden.herokuapp.com/api/v3/quotes?page=";

    url += page;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let numQuote = Math.floor(Math.random() * 10);
        console.log(numQuote);
        console.log(data)
        console.log(data.data[numQuote]);
        randomQuote.innerHTML = `<h1>${data.data.quoteText}</h1>`;
        randomQuote.innerHTML += `<h4>${data.data.quoteAuthor}</h4>`;
    })
}


