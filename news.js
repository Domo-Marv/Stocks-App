const apiKey = myApiKey;

//Route for news for ticker

const practice = async () => {
  const res = await fetch(
    `https://api.polygon.io/v2/reference/news?ticker=AAPL&apiKey=${apiKey}`
  );
  const data = await res.json();
  console.log(data);
};
practice();

//route for ticker information

// const practice = async () => {
//   const res = await fetch(
//     `https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=${apiKey}`
//   );
//   const data = await res.json();
//   console.log(data);
// };
// practice();

//route for open/close daily

// const practice = async () => {
//   const res = await fetch(
//     `https://api.polygon.io/v1/open-close/AAPL/2023-01-09?adjusted=true&apiKey=${apiKey}`
//   );
//   const data = await res.json();
//   console.log(data);
// };
// practice();
