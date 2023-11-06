import React from "react";

function Navbar(){
    return(
        <div className="navbar-container">
            <img className="navbar-logo" src="./media/troll_face.png" alt="Troll face"/>
            <h2 className="navbar-head">Meme generator</h2>
            <h4 className="navbar-nav">React Course</h4>
        </div>
    );
}


export default Navbar;