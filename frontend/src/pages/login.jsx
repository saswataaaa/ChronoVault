import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // Save JWT Token
      localStorage.setItem("token", res.data.token);

      // Save User Info
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0718] px-6">
      <div className="w-full max-w-md rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-10 shadow-[0_0_50px_rgba(168,85,247,0.2)]">

        <h1 className="text-4xl font-black text-center text-white">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Login to your ChronoVault account
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-purple-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-purple-500"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 py-3 font-semibold text-white hover:scale-[1.02] transition duration-300"
          >
            Login
          </button>

        </form>

        <p className="text-center text-gray-400 mt-8">
          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-purple-400 hover:text-purple-300"
          >
            Register
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Login;