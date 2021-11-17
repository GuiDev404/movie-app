import React from "react";
import "./CardMovie.css";
import "./SmallCardMovie.css";

import Button from "../Button";
import MiniInfo from "../MiniInfo";

import { randomColor } from "../../helpers";
import { Link } from "react-router-dom";

export default function CardMovie({
  Poster,
  Title,
  Type,
  Year,
  imdbID,
  isSmallCard = false,
}) {
  
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
    <Link to={`/movie/${imdbID}`}>
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
          {/* <Button
            styles={"btn btn_details txt--center cursor--pointer normalize--btn"}
            txt={"Ver Detalles"}
            withRedirect={true}
            path={`/movie/${imdbID}`}
          /> */}
        </div>
      </div>
    </Link>
  );
}
