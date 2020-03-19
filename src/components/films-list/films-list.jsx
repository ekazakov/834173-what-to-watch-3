import React, {PureComponent} from "react";
import FilmCard from "../film-card/film-card.jsx";
import withVideoPlayer from "../../hocs/with-video-player.jsx";
import {filmsProps, SHOWN_FILMS_DEFAULT} from "../../consts.js";
import {connect} from "react-redux";
import {getShownFilms} from "../../reducer/state/selectors.js";
import PropTypes from "prop-types";

const FilmCardWrapper = withVideoPlayer(FilmCard);

class FilmsList extends PureComponent {

  render() {
    const {films, onTitleOfFilmClick, shownFilms} = this.props;

    return (
      <div className="catalog__movies-list">

        {films.slice(0, shownFilms).map((movie) => (
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
  shownFilms: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  shownFilms: getShownFilms(state),
});

export {FilmsList};
export default connect(mapStateToProps)(FilmsList);
