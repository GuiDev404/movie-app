import React, { useRef, useEffect } from "react";
import "./Home.css";

import { waitingGifs, numberRandom } from '../../helpers';

import Header from "../../components/Header";
import useSEO from "../../hooks/useSEO";

export default function Home() {
  const dynamicImage = useRef(null);
  useSEO({ description: 'Inicio de pururu, realice una busqueda.', title: 'Home' })

  useEffect(()=> {
    let idTimeout = null;
    
    idTimeout = setInterval(()=> {
      dynamicImage.current.src = waitingGifs.tvOff;
    }, numberRandom(25000))

    return ()=> {
      clearInterval(idTimeout);
    }
  }, [])

  const changeImage = () => {
    const randomGif = waitingGifs.alls[numberRandom(waitingGifs.alls.length)];

    dynamicImage.current.src = randomGif;
  };

  return (
    <React.Fragment>
      <Header />
      
      <main className="container_movies flex-col flex-center">
        <h2 className="title-result"> Realice alguna busqueda </h2>
        <div className="stand-by">
          <img
            src={waitingGifs.tvOff}
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
