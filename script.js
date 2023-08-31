const applePie = '4VTPWthDv8vSvrpnixAP6afcKWkIOeEX';

//displaying 3 tickers
const main = document.querySelector('.main');

// const saveTicker = (ticker, val) => {
//   localStorage.setItem(ticker, val);

//   displayTicker(ticker);
// };

const displayTicker = async (ticker) => {
  const res = await fetch(
    `https://api.polygon.io/v2/reference/news?ticker=${ticker}&apiKey=${applePie}`
  );
  const data = await res.json();

  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const ol = document.createElement('ol');
  div.className = 'card';
  h2.textContent = ticker;

  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = data.results[i].article_url;
    a.target = '_blank';
    a.textContent = data.results[i].article_url;
    li.append(a);
    ol.append(li);
  }
  // div.addEventListener('click', () => {
  //   saveTicker(ticker, div);
  // });

  div.append(h2, ol);
  main.prepend(div);
};

displayTicker('AAPL');

//search function

const searchHandler = async (e) => {
  e.preventDefault();
  const searchTerm = e.target[0].value.toUpperCase();

  displayTicker(searchTerm);

  e.target.reset();
};

//submit event listener
document
  .querySelector('#search-form')
  .addEventListener('submit', searchHandler);
