const apiKey = 'JYXJhoFpdKGiFhlJbvIupdDfoVYJwWur';


const displayTickerInfo = async(ticker) => {
    const infoUrl = `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${apiKey}`;
    const res = await fetch(infoUrl);
    const data = await res.json();
    const results = data.results;
    console.log(results)
    const name = results.name;
    const icon = `${results.branding.icon_url}?${apiKey}`;
    const homepageLink = results.homepage_url;
    const location = `${results.address.city}, ${results.address.state}`;
    const description = results.description;
    
    const h2 = document.createElement('h2');
    h2.textContent = name;
    document.body.append(h2)
}

displayTickerInfo('ABNB')

// document.querySelector("#search-form").addEventListener("submit", async(e) => {
//   e.preventDefault();
//   const ticker = e.target[0].value;
//   const infoUrl = `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${apiKey}`;
//   const res = await fetch(infoUrl);
//   const data = await res.json();
//   console.log(data);
//   const results = data.results;
//   const name = results.name;
//   const icon = `${results.branding.iconurl}?${apiKey}`
//   const homepage = `${}`
  
// });