import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Movie(props) {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/movie/${props.title}`, {
      state: {
        title: props.title,
        posterPath: props.posterPath,
        voteAverage: props.voteAverage,
        overview: props.overview,
      },
    });
  };

  const onKeyPressImg = (event) => {
    // Trigger the same action on Enter key press
    if (event.key === "Enter") {
      onClickImg();
    }
  };

  return (
    <div
      className="movie"
      role="button" // Indicate that this element is a button for accessibility
      tabIndex={0} // Make the element focusable
      onClick={onClickImg}
      onKeyPress={onKeyPressImg}
    >
      <img src={props.posterPath} alt={props.title} />
      <div className="movie-description">
        <div className="movie-description-title">{props.title}</div>
        <p>{props.overview}</p>
      </div>
      <div className="movie-info">
        <div className="movie-title">{props.title}</div>
        <div className="movie-rating">{props.voteAverage}</div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
};

export default Movie;