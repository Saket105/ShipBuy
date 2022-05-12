import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/login";
import Register from "./component/Register/Register";
import NavBar from "./component/NavBar/Navbar";
import PreNavbar from "./component/PreNavbar/PreNavbar";

function App() {
  return (
    <div>
      <PreNavbar />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
