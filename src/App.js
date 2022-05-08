import "./App.css";
import Login from "./component/Login/login";
import Register from "./component/Register/Register";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar/Navbar";
import Home from "./component/Home/Home";

function App() {
  return (
    <div>
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
