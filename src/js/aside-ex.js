import { getQuoteDay } from './api-requests/quote-day';
const quoteDay = document.querySelector('.day-text');
const quoteAuthor = document.querySelector('.day-author');

const currentDate = new Date().toDateString();


function updateQuote() {
  getQuoteDay().then(data => {
    quoteDay.textContent = data.quote;
    quoteAuthor.textContent = data.author;
    addToLocalStorage(data);
    console.log(data);
  });
}
function addToLocalStorage(data) {
  const quoteDate = new Date().toDateString();
  const quoteObj = {
    date: quoteDate,
    quoteDay: data.quote,
    author: data.author,
  };

  localStorage.setItem('quoteOfDay', JSON.stringify(quoteObj));
}

function checkStorage() {
    if (!localStorage.getItem('quoteOfDay')) {
        updateQuote();
        return
  } 
  
    const quote = JSON.parse(localStorage.getItem('quoteOfDay'));
    if (currentDate === quote.date) {
      updateQuoteFromLocalStorage(quote);
        console.log('djafljaldhfkla')
    } else {
      updateQuote()
    }
}
function updateQuoteFromLocalStorage(data) {
     quoteDay.textContent = data.quoteDay;
    quoteAuthor.textContent = data.author;
}
 checkStorage()