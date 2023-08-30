const apiKey = 'JYXJhoFpdKGiFhlJbvIupdDfoVYJwWur';


const displayTickerInfo = async(ticker) => {
    const infoUrl = `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${apiKey}`;
    const res = await fetch(infoUrl);
    const data = await res.json();
    const results = data.results;
    console.log(results);
    const name = results.name;
    const icon = `${results.branding.icon_url}?apiKey=${apiKey}`;
    const homepageLink = results.homepage_url;
    const location = `${results.address.city}, ${results.address.state}`;
    const description = results.description;
    
    const h2Tag = document.createElement('h2');
    h2Tag.textContent = name;
    document.body.append(h2Tag);
    
    const imgTag = document.createElement('img');
    const linkTag = document.createElement('a');
    imgTag.src = icon;
    linkTag.href = homepageLink;
    linkTag.target = "_blank";
    linkTag.append(imgTag);
    document.body.append(linkTag);
    
    // const h3Tag = document.createAttribute('h3');
    // h3Tag.textContent = results.ticker;
    // document.body.append(h3Tag);
    
    const h4Tag = document.createElement('h4');
    h4Tag.textContent = location;
    document.body.append(h4Tag);
    
    const pTag = document.createElement('p');
    pTag.textContent = description;
    document.body.append(pTag);
};

displayTickerInfo('ABNB');
// displayTickerInfo('AAPL');

document.querySelector("#search-form").addEventListener("submit", async(e) => {
  e.preventDefault();
  const ticker = e.target[0].value;
  const infoUrl = `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${apiKey}`;
    const res = await fetch(infoUrl);
    const data = await res.json();
    const results = data.results;
    console.log(results);
    const name = results.name;
    const icon = `${results.branding.icon_url}?apiKey=${apiKey}`;
    const homepageLink = results.homepage_url;
    const location = `${results.address.city}, ${results.address.state}`;
    const description = results.description;
    
    const h2Tag = document.createElement('h2');
    h2Tag.textContent = name;
    document.body.append(h2Tag);
    
    const imgTag = document.createElement('img');
    const linkTag = document.createElement('a');
    imgTag.src = icon;
    linkTag.href = homepageLink;
    linkTag.target = "_blank";
    linkTag.append(imgTag);
    document.body.append(linkTag);
    
    // const h3Tag = document.createAttribute('h3');
    // h3Tag.textContent = results.ticker;
    // document.body.append(h3Tag);
    
    const h4Tag = document.createElement('h4');
    h4Tag.textContent = location;
    document.body.append(h4Tag);
    
    const pTag = document.createElement('p');
    pTag.textContent = description;
    document.body.append(pTag);
  
});