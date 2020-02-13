import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card.jsx";

const titleOfMovieHandler = () => {};

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmId: null,
    };
  }

  _handleFilmCardHover(film) {
    this.setState({
      activeFilmId: film.id,
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">

        {films.map((film) => (
          <FilmCard
            key={`${film.id}-${film.name}`}
            film={film}
            onFilmCardHover={() => this._handleFilmCardHover(film)}
            onTitleOfMovieClick={titleOfMovieHandler}
          />
        ))}

      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default FilmsList;
