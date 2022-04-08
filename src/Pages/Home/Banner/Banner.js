import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className="bannerItems">
                    <h1>Order Healthy And <br />Fresh Food Any Time</h1>
                    <p>Italian food makes people think of big family dinners. So you <br />may want to position your restaurant as a place to bring the <br />whole family.</p>
                    <button className='bannerBtn'>Explore Resturants</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;