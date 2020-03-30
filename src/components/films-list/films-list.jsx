import React from "react";
import FilmCard from "../film-card/film-card.jsx";
import withVideoPlayer from "../../hocs/with-video-player.jsx";
import {filmsProps} from "../../consts.js";
import PropTypes from "prop-types";

const FilmCardWrapper = withVideoPlayer(FilmCard);

const FilmsList = (props) => {
  const {films, onTitleOfFilmClick} = props;

  return (
    <div className="catalog__movies-list">

      {films.map((movie) => (
        <FilmCardWrapper
          key={`${movie.id}-${movie.name}`}
          film={movie}
          onTitleOfFilmClick={() => onTitleOfFilmClick(movie.id)}
        />
      ))}

    </div>
  );
};

FilmsList.propTypes = {
  films: filmsProps,
  onTitleOfFilmClick: PropTypes.func.isRequired,
};

export default FilmsList;
