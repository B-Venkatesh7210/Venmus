import React from 'react';
import VenmusYellow from "../logos/Venmus Logo Yellow.png"

function Navbar() {
    return (
        <div className='navbar'>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <img alt="Venmus Logo" src={VenmusYellow} style={{width: "4.5rem"}}/>
        <div className="navbarTabs">
        <p>HOME</p>
        <p>SONGS</p>
        <p>CONTACT</p>
        


        </div>

        </div>
            
        </div>
    )
}

export default Navbar
