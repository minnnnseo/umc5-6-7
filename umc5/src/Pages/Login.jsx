// Login.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "../Login.css";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(""); // 이메일 상태 관리
  const [password, setPassword] = useState(""); // 비밀번호 상태 관리
  const [isEmailValid, setIsEmailValid] = useState(false); // 이메일 유효성 상태
  const [isPasswordValid, setIsPasswordValid] = useState(false); // 비밀번호 유효성 상태
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // 버튼 활성화 상태

  // 이메일 유효성 검사
  const validateEmail = (value) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[com]{2,}$/;
    return emailRegex.test(value);
  };

  // 비밀번호 유효성 검사
  const validatePassword = (value) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(value);
  };

  // 이메일 입력 시 처리
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
    setIsButtonDisabled(!validateEmail(value) || !isPasswordValid); // 버튼 활성화 상태 업데이트
  };

  // 비밀번호 입력 시 처리
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setIsPasswordValid(validatePassword(value));
    setIsButtonDisabled(!isEmailValid || !validatePassword(value)); // 버튼 활성화 상태 업데이트
  };

  const handleLogin = () => {
    if (isEmailValid && isPasswordValid) {
      setIsLoggedIn(true);
      navigate("/", { state: { isLoggedIn: true } });
    }
  };

  return (
    <div className="login-page-content">
      <h2 className="login-title">로그인</h2>
      <p className="login-message">이메일과 비밀번호를 입력해주세요.</p>
      {/* 이메일 입력란 */}
      <label className="login-label" htmlFor="username">
        이메일 주소
      </label>
      <p>
        {" "}
        {/* 이메일 입력 안내 문구 */}
        <input
          className="login-input"
          id="username"
          name="username"
          value={email}
          onChange={handleEmailChange}
        />
      </p>
      {email && !isEmailValid && (
        <span className="error-message">
          올바른 이메일 주소 형식이 아닙니다.
        </span>
      )}

      {/* 비밀번호 입력란 */}
      <label className="login-label" htmlFor="password">
        비밀번호
      </label>
      <p>
        {" "}
        {/* 비밀번호 입력 안내 문구 */}
        <input
          className="login-input"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </p>
      {password && !isPasswordValid && (
        <span className="error-message">
          영문, 숫자, 특수문자 조합 8자리 이상이어야 합니다.
        </span>
      )}

      {/* 로그인 버튼 */}
      <button
        className="login-btn2"
        title="로그인"
        onClick={handleLogin}
        disabled={isButtonDisabled}
      >
        {isLoggedIn ? "로그아웃" : "확인"}
      </button>
      <div className="login-links">
        {/* 로그인 링크들 */}
        <Link className="a1" to="/signin" title="회원가입">
          회원가입
        </Link>
        <span className="separator">|</span> {/* 구분선 */}
        <Link className="a1" to="/lookfor" title="아이디/비밀번호 찾기">
          아이디/비밀번호 찾기
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default Login;