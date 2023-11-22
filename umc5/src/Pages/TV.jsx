import React from "react";
import TVShow from "../Components/TVShow.jsx"; // TV 항목을 렌더링하는 컴포넌트
import { tvshows } from "../tvDummy.js"; // tvDummy.js에서 TV 데이터 가져오기

function TV() {
  // TV 데이터를 가져온 후 poster_path에 URL 추가하기
  const baseURL = "https://image.tmdb.org/t/p/w1280";

  // tvs에서 TV 데이터 불러오기
  const tvData = tvshows.results.map((tv) => ({
    ...tv,
    poster_path: `${baseURL}${tv.poster_path}`,
  }));

  return (
    <div className="tv-container">
      {tvData.map((tv) => (
        <TVShow
          key={tv.id}
          title={tv.name}
          posterPath={tv.poster_path}
          voteAverage={tv.vote_average}
          overview={tv.overview}
        />
      ))}
    </div>
  );
}

export default TV;