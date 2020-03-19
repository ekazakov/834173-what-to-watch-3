import React, {PureComponent} from "react";
import FilmCard from "../film-card/film-card.jsx";
import withVideoPlayer from "../../hocs/with-video-player.jsx";
import {filmsProps, SHOWN_FILMS_DEFAULT} from "../../consts.js";
import PropTypes from "prop-types";

const FilmCardWrapper = withVideoPlayer(FilmCard);

class FilmsList extends PureComponent {

  render() {
    const {films, onTitleOfFilmClick} = this.props;

    return (
      <div className="catalog__movies-list">

        {films.slice(0, SHOWN_FILMS_DEFAULT).map((movie) => (
          <FilmCardWrapper
            key={`${movie.id}-${movie.name}`}
            film={movie}
            onTitleOfFilmClick={() => onTitleOfFilmClick(movie.id)}
          />
        ))}

      </div>
    );
  }
}

FilmsList.propTypes = {
  films: filmsProps,
  onTitleOfFilmClick: PropTypes.func.isRequired,
};

export default FilmsList;
