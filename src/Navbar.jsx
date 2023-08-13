import React from "react"
import globe from './assets/globe.png'
import './Navbar.css'

export default function Navbar() {
    return(
        <nav>
            <div className="navbar">
                <img src={ globe } />
                <span>My Travel Journal</span>
            </div>
        </nav>
    )
}