import React from "react";
import Navbar from "./components/navbar";
import Meme from "./components/meme";

function App(){
    return(
        <div className="app-container">
            <Navbar />
            <Meme />
        </div>
    );
}

export default App;