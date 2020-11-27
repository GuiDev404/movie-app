import React, { useRef, useEffect } from "react";
import "./Home.css";

import gifs from '../../helpers/waitingGifs';
import numberRandom from "../../helpers/numberRandom";

import Header from "../../components/Header";

export default function Home() {
  const dynamicImage = useRef(null);

  useEffect(()=> {
    let idTimeout = null;
    
    idTimeout = setInterval(()=> {
      dynamicImage.current.src = gifs.tvOff;
    }, numberRandom(25000))

    return ()=> {
      clearInterval(idTimeout);
    }
  }, [])

  const changeImage = () => {
    const randomGif = gifs.alls[numberRandom(gifs.alls.length)];

    dynamicImage.current.src = randomGif;
  };

  return (
    <React.Fragment>
      <Header />
      
      <main className="container_movies flex-col flex-center">
        <h2 className="title-result"> Realize alguna busqueda </h2>
        <div className="stand-by">
          <img
            src={gifs.tvOff}
            className="home_search_image"
            ref={dynamicImage}
            alt="realiza alguna busqueda en Pururu"
          />
          <img
            src={`${process.env.PUBLIC_URL}/img/old_tv.png`}
            alt="old_tv"
            onClick={changeImage}
            className="old-tv"
          />
        </div>
      </main>
    </React.Fragment>
  );
}
