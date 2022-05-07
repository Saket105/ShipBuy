import "./App.css";
import Login from "./component/Login/login";
import Register from "./component/Register/Register";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
