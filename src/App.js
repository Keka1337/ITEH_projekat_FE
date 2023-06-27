import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Hunter from "./pages/Hunter";
import { Routes, Route, Navigate } from "react-router-dom";
import Team from "./pages/Team";
import Venison from "./pages/Venison";
import Appointment from "./pages/Appointment";
import { useEffect, useState } from "react";
import { login } from "./api/auth";
import { default as axios } from "axios";

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(false);
  const [currentTemperature, setCurrentTemperature] = useState(0);

  const handleLogin = async (data) => {
    setError(false);

    try {
      const res = await login(data);
      const accessToken = res.accessToken;
      const roleRes = res.role;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("role", roleRes);
      setToken(accessToken);
      setRole(roleRes);
    } catch (e) {
      setError(true);
    }
  };

  const getCurrentWhaterTemperature = async () => {
    const res = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=44.80&longitude=20.47&current_weather=true&timezone=Europe%2FBerlin"
    );
    setCurrentTemperature(res.data.current_weather.temperature);
  };

  useEffect(() => {
    const storageToken = localStorage.getItem("token");
    if (storageToken && storageToken.length) {
      setToken(storageToken);
      setRole(localStorage.getItem("role"));
    }
    getCurrentWhaterTemperature();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken("");
    setRole("");
  };

  if (token) {
    return (
      <div>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Navbar
                  logout={handleLogout}
                  currentTemperature={currentTemperature}
                />
                <Home />
              </>
            }
          />
          <Route
            path="/hunter"
            element={
              <>
                <Navbar
                  logout={handleLogout}
                  currentTemperature={currentTemperature}
                />
                <Hunter />
              </>
            }
          />
          <Route
            path="/team"
            element={
              <>
                <Navbar
                  logout={handleLogout}
                  currentTemperature={currentTemperature}
                />
                <Team />
              </>
            }
          />
          <Route
            path="/venison"
            element={
              <>
                <Navbar
                  logout={handleLogout}
                  currentTemperature={currentTemperature}
                />
                <Venison />
              </>
            }
          />
          <Route
            path="/appointment"
            element={
              <>
                <Navbar
                  logout={handleLogout}
                  currentTemperature={currentTemperature}
                />
                <Appointment />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={<Login handleLogin={handleLogin} error={error} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    );
  }
}

export default App;
