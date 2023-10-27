import { getQuoteDay } from './api-requests/quote-day';
const quoteDay = document.querySelector('.day-text');
const quoteAuthor = document.querySelector('.day-author');




function updateQuote() {
  getQuoteDay().then(data => {
    quoteDay.textContent = data.quote;
    quoteAuthor.textContent = data.author;
    addToLocalStorage(data);
    console.log(data);
  });
}
function addToLocalStorage(data) {
    const currentDate = new Date();
    const quoteDate = currentDate.getDate()
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
    const currentDate = new Date();
    const quoteDate = JSON.parse(localStorage.getItem('quoteOfDay')).date;
    if (currentDate === quoteDate) {
        console.log('djafljaldhfkla')
    }
    console.log(quoteDate)
}
updateQuote()
checkStorage()