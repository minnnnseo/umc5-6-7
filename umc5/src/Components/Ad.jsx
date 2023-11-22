import React from "react";
import PropTypes from "prop-types";

function Ad({ DisplayAd }) {
  if (DisplayAd) {
    return (
      <div className="ad-container">
        <img
          style={{ maxWidth: "100%" }} // 이미지 최대 너비 설정
          src="Img/AdImage.svg" //"Img/AdImage.svg"
          alt="Advertisement"
        />
      </div>
    );
  } else {
    return null;
  }
}

Ad.propTypes = {
  DisplayAd: PropTypes.bool.isRequired, // prop 이름 수정
};

export default Ad;