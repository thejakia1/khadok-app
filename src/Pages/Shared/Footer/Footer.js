import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='footer1'>
                <h2>About Khadok</h2>
                <p>Our aim is to focus on the quality of your meat. <br /> If you can call out organic beef, sustainable <br /> farming.</p>
                <p><strong>Phone:</strong> +8801811111111</p>
                <p><strong>Email:</strong> khadokApp@gmail.com</p>
            </div>
            <div className='footer2'>
                <h2 className='footer-title'>Opening Time</h2>
                    <div className="timing">
                        <p>Saturday ---------- 9am to 11pm</p>
                        <p>Sunday ---------- 9am to 11pm</p>
                        <p>Monday ---------- 9am to 11pm</p>
                        <p>Tuesday ---------- 9am to 11pm</p>
                        <p>Wednesday ---------- 9am to 11pm</p>
                        <p>Thursday ---------- 9am to 11pm</p>
                        <p>Friday ---------- 9am to 11pm</p>
                    </div>
            </div>
            <div className='footer3'>
                <h2 className="footer-title">Useful Links</h2>
                <a href="">Demo Link</a> <br />
                <a href="">Demo Link</a><br />
                <a href="">Demo Link</a><br />
                <a href="">Demo Link</a>
            </div>
        </div>
    );
};

export default Footer;