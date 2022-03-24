// PEGANDO a URL da API
const API_URL = 'https://api.coincap.io/v2/assets';

const listBitCoins = document.querySelector('#list-bitcoins');

const setItemList = (item, symbol, value) => {
  const itemList = document.createElement('li');
  itemList.className = 'list-bitcoins-item';
  itemList.innerText = `${item} (${symbol}): ${value}`;
  listBitCoins.appendChild(itemList);
};

const setURLEndpoint = (endpoint) => {
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${endpoint}.json`;
  return url;
};

const getValueInRais = async (symbol) => {
  try {
    const url = setURLEndpoint(symbol.toLowerCase());
    const value = await fetch(url);
    const conversion = await value.json();
    return await conversion[symbol.toLowerCase()].brl;
  } catch (e) {
    console.log(e);
  }
};

const fetchBitCoins = async () => {
  try {
    const response = await fetch(API_URL);
    const coins = await response.json();
    const { data } = coins;
    const chooses = data.filter((coin, index) => index < 10);
    chooses.forEach(async (coin) => {
      const brl = await getValueInRais(coin.symbol);
      setItemList(coin.name, coin.symbol, `R$ ${brl}`);
    });
  } catch (e) {
    console.log(e);
  }
};

window.onload = () => fetchBitCoins();