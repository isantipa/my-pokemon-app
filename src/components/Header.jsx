import React from "react";
import pokemonLogo from '../assets/images/pokemon.png';

function Header () {
    return (
        <div className="header">
            <div className="logo">
                <img src={pokemonLogo} alt="Pokemon logo."/>
            </div>
            <h1>App</h1>
        </div>
    );
}

export default Header;