import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import PropTypes from "prop-types";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    if (typeof setIsLoggedIn === "function") {
      setIsLoggedIn(false);
    }
  };

  return (
    <header className="header-container">
      <Link to="/" className="logo">
        <img
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <div className="header-content">
        <ul className="nav-links">
          <li>
            <Link to="/movies">영화</Link>
          </li>
          <li>
            <Link to="/tv-programs">TV 프로그램</Link>
          </li>
          <li>
            <Link to="/people">인물</Link>
          </li>
        </ul>
        <div className="login-control">
          {isLoggedIn ? (
            <button className="login-btn" onClick={handleLogout}>
              로그아웃
            </button>
          ) : (
            <Link to="/login" className="login-btn">
              로그인
            </Link>
          )}
          <p className="welcome-message">
            {isLoggedIn ? "환영합니다!" : "로그인 해주세요!"}
          </p>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Header;