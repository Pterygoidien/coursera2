import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
