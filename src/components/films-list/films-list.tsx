import * as React from "react";
import FilmCard from "../film-card/film-card";
import withVideoPlayer from "../../hocs/with-video-player";
import {Film} from "../../types";

const FilmCardWrapper = withVideoPlayer(FilmCard);

interface FilmsListProps {
  films: Film[],
  onFilmClick: (number) => void,
  shownFilms? : number,
}

const FilmsList: React.FunctionComponent<FilmsListProps> = (props: FilmsListProps) => {
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

export default FilmsList;
