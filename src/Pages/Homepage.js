import React from 'react'
import  Banner  from '../components/Banner/Banner';
import CoinsTable from '../components/Banner/CoinsTable';
import CoinPage from './CoinPage';
 const Homepage = () => {
    return (
        <div>
           
            <Banner/>
            <CoinsTable/>
        </div>
        
    )
}
export default Homepage;