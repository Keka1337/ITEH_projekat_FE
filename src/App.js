import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Hunter from "./pages/Hunter";
import { Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import Venison from "./pages/Venison";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/hunter"
          element={
            <>
              <Navbar />
              <Hunter />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <Navbar />
              <Team />
            </>
          }
        />
        <Route
          path="/venison"
          element={
            <>
              <Navbar />
              <Venison />
            </>
          }
        />
        <Route
          path="/appointment"
          element={
            <>
              <Navbar />
              <Appointment />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
