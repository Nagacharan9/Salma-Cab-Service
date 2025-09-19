import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic or redirect to /admin for admin login
    if (username === "admin" && password === "admin123") {
      window.location.href = "/admin";
    } else {
      alert("Login successful! (demo, no real auth)");
      window.location.href = "/";
    }
  };
  return (
    <div style={{ margin: "50px auto", maxWidth: "400px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Login</button>
      </form>
      <p>Admin? Use <b>admin/admin123</b></p>
    </div>
  );
}

export default Login;
