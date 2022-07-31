import { useEffectOnce } from '../customHooks/customHooks';
import { getCoinsMarkets } from "../services/api";
import { useState } from 'react';

const Home = () => {

    const [coins, setCoins]=useState()

    useEffectOnce(() => {
        async function getData() {
            const res = await getCoinsMarkets();
            if(res.status===200){
                setCoins(res.data)
            }
            else{
                console.log(res);
            }
            console.log(res);
        }
        getData();
    })

    return(
        <div>Home</div>
    )
}

export default Home;