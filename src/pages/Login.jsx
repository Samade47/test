import React from "react";

const Login = () => {
  return (
    <div className="form">
      <h2>Login</h2>
      <input type="text" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button>submit</button>
    </div>
  );
};

export default Login;
