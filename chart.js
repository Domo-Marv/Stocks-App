const peach = 'mOfbfSph7_pxF_tJIJGojW5H3rtCDeQs';

const main = document.querySelector('.main');

const displayTicker = async (ticker) => {
  const res = await fetch(
    `https://api.polygon.io/v1/open-close/${ticker}/2023-01-09?adjusted=true&apiKey=${peach}`
  );
  const data = await res.json();
  // console.log(data);
  // console.log('open', data.open);
  // console.log('high', data.high);
  // console.log('low', data.low);
  // console.log('close', data.close);

  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const canvas = document.createElement('canvas');
  h2.textContent = ticker;
  div.className = 'card';
  canvas.id = 'myChart';

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['Open', 'High', 'Low', 'Close'],
      datasets: [
        {
          label: 'Price',
          data: [data.open, data.high, data.low, data.close],
          borderWidth: 3,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });

  div.append(h2, canvas);
  main.prepend(div);
};

displayTicker('TSLA');

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
