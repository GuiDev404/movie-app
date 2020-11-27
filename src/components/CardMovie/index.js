import React from "react";
import "./CardMovie.css";
import "./SmallCardMovie.css";

import Button from "../Button";
import MiniInfo from "../MiniInfo";

import numberRandom from "../../helpers/numberRandom";

export default function CardMovie({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
  isSmallCard = false,
}) {
  
  function randomColor() {
    let colors = [
      "#c0392b",
      "#2980b9",
      "#e67e22",
      "#f39c12",
      "#1abc9c",
      "#bdc3c7",
      "#8e44ad",
      "#bdc3c7",
    ];

    return colors[numberRandom(colors.length)];
  }

  if (isSmallCard) {
    return (
      <Button
        styles={"btn btn_small_card cursor--pointer normalize--btn"}
        inlineStyle={{
          background: `${Poster !== "N/A" ? `url(${Poster})` : randomColor()}`,
        }}
        txt={Title}
        withRedirect={true}
        path={`/movie/${imdbID}`}
      />
    );
  }

  return (
    <div className="card">
      <div className="container-img">
        <img
          src={Poster === "N/A" ? process.env.PUBLIC_URL+"/img/default-movie.jpg" : Poster}
          className="container-img__img"
          alt="poster"
        />
      </div>

      <div className="container-info">
        <h3 className="container-info__title"> {Title} </h3>

        <div className="container-info__items">
          <MiniInfo txt={Type} icon="fas fa-film" />
          <MiniInfo txt={Year} icon="fas fa-calendar-week" />
        </div>
        <Button
          styles={"btn btn_details txt--center cursor--pointer normalize--btn"}
          txt={"Ver Detalles"}
          withRedirect={true}
          path={`/movie/${imdbID}`}
        />
      </div>
    </div>
  );
}
