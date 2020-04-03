import * as React from "react";
import FilmCard from "../film-card/film-card";
import withVideoPlayer from "../../hocs/with-video-player";
import {filmsProps} from "../../consts";
import PropTypes from "prop-types";

const FilmCardWrapper = withVideoPlayer(FilmCard);

const FilmsList = (props) => {
  const {films, onFilmClick} = props;

  return (
    <div className="catalog__movies-list">

      {films.map((movie) => (
        <FilmCardWrapper
          key={`${movie.id}-${movie.name}`}
          film={movie}
          onFilmClick={() => onFilmClick(movie.id)}
        />
      ))}

    </div>
  );
};

FilmsList.propTypes = {
  films: filmsProps,
  onFilmClick: PropTypes.func.isRequired,
};

export default FilmsList;
