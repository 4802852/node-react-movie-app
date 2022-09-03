import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import MovieDetail from "./views/MovieDetail/MovieDetail";

function App() {
  const AuthLandingPage = auth(LandingPage, null);
  const AuthLoginPage = auth(LoginPage, false);
  const AuthRegisterPage = auth(RegisterPage, false);
  const AuthMovieDetail = auth(MovieDetail, null);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AuthLandingPage />} />
        <Route exact path="/login" element={<AuthLoginPage />} />
        <Route exact path="/register" element={<AuthRegisterPage />} />
        <Route exact path="/movie/:movieId" element={<AuthMovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
