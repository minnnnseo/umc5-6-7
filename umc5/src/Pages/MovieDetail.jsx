import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "../MovieDetail.css";

function MovieDetail() {
  // url에서 넘겨 받은 title
  const { title } = useParams();
  // 네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
  // 이미지, 별점 등의 모든 정보들

  const { state } = useLocation();
  console.log(title);
  console.log(state);

  return (
    <div className="movie-detail-container">
      <div className="movie-poster">
        <img src={state.posterPath} alt={state.title} />
      </div>
      <div className="movie-details">
        <h2>{state.title}</h2>
        <p>{state.overview}</p>
        <div>평점: {state.voteAverage}</div>
      </div>
    </div>
  );
}

export default MovieDetail;