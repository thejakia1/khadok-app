import React from 'react';
import MyNavbar from '../../MyNavbar/MyNavbar';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;