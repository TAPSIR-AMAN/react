import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="logo">MyLogo</div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div class="menu-toggle" id="menu-toggle">
                    ☰
                </div>
            </nav>
        </div>
    )
}

export default Navbar
