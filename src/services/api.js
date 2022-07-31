import axios from 'axios';

const instance = axios.create({
    baseURL:'https://api.coingecko.com/api/v3',
    headers: {'Accept':'aplication/json'}
})

const getCoinsMarkets = async () => {
    return instance.get('/coins/markets?vs_currency=eur&order=market_cap_desc')
}

export { getCoinsMarkets }