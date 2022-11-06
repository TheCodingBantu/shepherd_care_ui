import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import About from "./pages/About";
import ForgotPass from "./pages/ForgotPass";
import Members from "./pages/Members";
import InfoPage from "./pages/InfoPage";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />


        <Route path="/login" element={<Login />} />
        <Route path="/celebrate" element={<InfoPage />} />

        <Route path="/about-developer" element={<About />} />

        <Route path="/forgot-pass" element={<ForgotPass />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
