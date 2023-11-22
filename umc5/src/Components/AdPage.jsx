import React, { useState } from "react";
import Ad from "./Ad";

function AdPage() {
  const [showAd, setShowAd] = useState(true);

  const handleToggleClick = () => {
    setShowAd(!showAd);
  };

  return (
    <div>
      <Ad DisplayAd={showAd} />
      <button onClick={handleToggleClick}>
        {showAd ? "광고 안 보기" : "광고 보기"}
      </button>
    </div>
  );
}

export default AdPage;
