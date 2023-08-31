const appleCrumble = 'JYXJhoFpdKGiFhlJbvIupdDfoVYJwWur';

const main = document.querySelector('.main');

const displayTickerInfo = async(ticker) => {
    const infoUrl = `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${appleCrumble}`;
    const res = await fetch(infoUrl);
    const data = await res.json();
    const results = data.results;
    console.log(results);
    const name = results.name;
    const icon = `${results.branding.icon_url}?apiKey=${appleCrumble}`;
    const homepageLink = results.homepage_url;
    const location = `${results.address.city}, ${results.address.state}`;
    const description = results.description;
    
    const div = document.createElement('div');
    div.className = 'card';
    
    const h2Tag = document.createElement('h2');
    h2Tag.textContent = name;
    
    const imgTag = document.createElement('img');
    const linkTag = document.createElement('a');
    imgTag.src = icon;
    imgTag.id = 'company-logo'
    linkTag.href = homepageLink;
    linkTag.className = 'company-site'
    linkTag.target = "_blank";
    linkTag.append(imgTag);
    
    const h3Tag = document.createElement('h3');
    h3Tag.textContent = results.ticker;
    // div.append(h3Tag);
    
    const h4Tag = document.createElement('h4');
    h4Tag.textContent = location;
    
    const pTag = document.createElement('p');
    pTag.textContent = description;
    
    div.append(h2Tag, linkTag, h3Tag, h4Tag, pTag)
    main.prepend(div);
};

displayTickerInfo('ABNB');
// displayTickerInfo('AAPL');

document.querySelector("#search-form").addEventListener("submit", async(e) => {
  e.preventDefault();
  const ticker = e.target[0].value.toUpperCase();
  displayTickerInfo(ticker);
  e.target.reset();
});