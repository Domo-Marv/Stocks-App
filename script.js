const key = '4VTPWthDv8vSvrpnixAP6afcKWkIOeEX';

//displaying 3 tickers
const main = document.querySelector('.main');

const displayTicker = async (ticker) => {
  const res = await fetch(
    `https://api.polygon.io/v2/reference/news?ticker=${ticker}&apiKey=${key}`
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
    a.href = data.results[i].amp_url;
    a.textContent = data.results[i].amp_url;
    li.append(a);
    ol.append(li);
  }
  div.append(h2, ol);
  main.append(div);
};

displayTicker('AAPL');

//Route for news for ticker

// const practice = async () => {
//   const res = await fetch(
//     `https://api.polygon.io/v2/reference/news?ticker=AAPL&apiKey=${apiKey}`
//   );
//   const data = await res.json();
//   console.log(data);
// };
// practice();

//route for ticker information

// const practice1 = async () => {
//   const res = await fetch(
//     `https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=${apiKey}`
//   );
//   const data = await res.json();
//   console.log(data);
// };
// practice1();

//route for open/close daily

// const practice = async () => {
//   const res = await fetch(
//     `https://api.polygon.io/v1/open-close/AAPL/2023-01-09?adjusted=true&apiKey=${apiKey}`
//   );
//   const data = await res.json();
//   console.log(data);
// };
// practice();
