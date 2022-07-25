import React from "react";
import Emoji from "../assets/framed-picture-emoji.png";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: "https://i.imgflip.com/4xgqu.jpg",
  });

  const [allMemes, setAllMemes] = React.useState({});

  React.useEffect(() => {
    console.log("Fetching API...");
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
  }, []);

  function getRandomMeme() {
    const memes = allMemes.data.memes;
    const randomIndex = (memes.length * Math.random()) << 0;
    setMeme((prevMeme) => ({
      ...prevMeme,
      image: memes[randomIndex].url,
    }));
  }

  function handleChange(event) {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [event.target.name]: event.target.value,
      };
    });
  }

  //TODO: Not make the meme span full width when at big screen
  return (
    <main className="meme">
      <div className="meme--form">
        <input
          className="meme--input1"
          type="text"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          className="meme--input2"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="meme--button" onClick={getRandomMeme}>
          Get a new meme image
          <img className="meme--emoji" src={Emoji} />
        </button>
      </div>
      <div className="meme--output">
        <img className="meme--image" src={meme.image} />
        <h1 className="meme--top-text">{meme.topText}</h1>
        <h1 className="meme--bottom-text">{meme.bottomText}</h1>
      </div>
    </main>
  );
}

export default Meme;
