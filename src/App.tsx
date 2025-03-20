import {Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Login } from "./components/login";

const App = () => {
  
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/" element={<Login />} />
    </Routes>
    
    </>
  );
};

export default App;
