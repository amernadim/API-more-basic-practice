const loadQuote = () => {
  fetch('https://api.kanye.rest/')
  .then(res => res.json())
  .then(data => displayQuote(data))
}

const displayQuote = x => {
  const blockQuote = document.getElementById('quote');
  blockQuote.innerText = x.quote;  
}
