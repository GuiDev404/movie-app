import React from "react";
import "./ContainerMovies.css";
import Movie from "../CardMovie";
import Emoji from "../Emoji";

const ContainerMovies = ({ movies, keywordSearch }) => {
  return (
    <div className="container_movies">
      {movies ? (
        <>
          <h2 className="title-result title-result__good"> {keywordSearch} </h2>
          {movies.map((data) => (
            <Movie key={data.imdbID} {...data} isDetails={false} />
          ))}
        </>
      ) : (
        <h1 className="title-result">
          No se encontraron resultados para {keywordSearch}
          <Emoji description={"emoji-llorando"} emoji={"😭😭"} />
        </h1>
      )}
    </div>
  );
};

export default React.memo(ContainerMovies);
