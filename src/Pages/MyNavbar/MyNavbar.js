import React from 'react';
import './MyNavbar.css'

const MyNavbar = () => {
    return (
        <div>
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
                <label class="logo">Khadok</label>
                <ul id="menu">
                    <li><a onclick="close()" class="nav-item" href="#buy-flamingo">Home</a></li>
                    <li><a onclick="close()" class="nav-item" href="#roadmap">Resturants</a></li>
                    <li><a onclick="close()" class="nav-item" href="#levels">Hot Deals</a></li>
                    <li><a onclick="close()" class="nav-item" href="#team">TEAM</a></li>
                    <li><a onclick="close()" class="nav-item" href="#Login">Login</a></li>
                    <li><a onclick="close()" class="nav-item" href="https://www.instagram.com/metaflamingosociety/"><i class="fab fa-instagram"></i></a></li>
                    <li><a onclick="close()" class="nav-item" href="https://twitter.com/_MFSociety"><i class="fab fa-twitter"></i></a></li>
                    <li><a onclick="close()" class="nav-item" href="https://discord.com/invite/axjETS2ss4"><i class="fab fa-discord"></i></a></li>
                </ul>
            </nav>  
        </div>
    );
};

export default MyNavbar;
