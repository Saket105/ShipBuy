import "./App.css";
import Login from "./component/Login/login";
import Register from "./component/Register/Register";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <NavBar />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
