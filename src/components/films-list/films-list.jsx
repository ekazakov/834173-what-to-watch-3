import React, {PureComponent} from "react";
import FilmCard from "../film-card/film-card.jsx";
import withVideoPlayer from "../../hocs/with-video-player.jsx";
import {filmsProps} from "../../mocks/prop-types.js";

const titleOfMovieHandler = () => {};

const FilmCardWrapper = withVideoPlayer(FilmCard);

class FilmsList extends PureComponent {

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">

        {films.map((movie) => (
          <FilmCardWrapper
            key={`${movie.id}-${movie.name}`}
            film={movie}
            onTitleOfMovieClick={titleOfMovieHandler}
          />
        ))}

      </div>
    );
  }
}

FilmsList.propTypes = {
  films: filmsProps,
};

export default FilmsList;
