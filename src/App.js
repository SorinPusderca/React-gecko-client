

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from "./pages/about"
import Register from './pages/register'
import NavbarHeader from './components/navbarHeader/navbarHeader';
import "./App.css"
import { useNavigate } from "react-router-dom";
import Details from './pages/details';
import LogIn from './pages/login';
import Login from './pages/login';





function App() {
  return (
    <BrowserRouter>
    <NavbarHeader />
    {/* <Register/> */}
    <main>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  </BrowserRouter>
  );
}

export default App;
