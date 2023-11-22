import React, { Component } from "react";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div className="login-control">
        {isLoggedIn ? (
          <div className="login-content">
            <button className="login-btn" onClick={this.handleLogoutClick}>
              로그아웃
            </button>
            <div className="welcome-message">
              <p>환영합니다!</p>
            </div>
          </div>
        ) : (
          <div className="login-content">
            <button className="login-btn" onClick={this.handleLoginClick}>
              로그인
            </button>
            <div className="welcome-message">
              <p>로그인 해주세요!</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LoginControl;
