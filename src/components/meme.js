// import libs
import React from "react";


// Meme Component

function Meme(){

    // state for storing generated data
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText: "",
        randomImage: "https://i.kym-cdn.com/entries/icons/mobile/000/023/397/C-658VsXoAo3ovC.jpg"
    });

    const [allMeme, setAllMeme] = React.useState([]);

    React.useEffect(()=>{

            // fetches all the data 
            let fetchData = async () =>{
                const res =  await fetch("https://api.imgflip.com/get_memes")
                const data = await res.json();
                setAllMeme(data.data.memes);
            }

            fetchData();
        },
        []
    );
    
    // gets the new meme image while stores provided upperText and lowerText
    function getMemeImage(){
        const randN = Math.floor(Math.random() * allMeme.length); 
        const url = allMeme[randN].url;
        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                randomImage: url
            }
        });
    }

    // update text (upper and lower) when provided as input
    function UpdateMeme(event){
        const {name, value} = event.target;

        setMeme(prevMeme=>{
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <div className="meme-container">
            <div className="meme-form">
                <input 
                    type="text"
                    placeholder="Upper Text"
                    className="meme-text"
                    value={meme.topText}
                    name="topText"
                    onChange={UpdateMeme}
                />
                <input 
                    type="text"
                    placeholder="Lower Text"
                    className="meme-text"
                    value={meme.bottomText}
                    name="bottomText"
                    onChange={UpdateMeme}
                />

                <button
                    className="meme-btn-submit"
                    onClick={getMemeImage}
                >
                    Get a new meme Image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="Memegen Image" className="meme-img"/>
                <h2 className="meme-data top">{meme.topText}</h2>
                <h2 className="meme-data bottom">{meme.bottomText}</h2>
            </div>
            
        </div>
    );
}
export default Meme;