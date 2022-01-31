import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./components/route";
import Header from "./components/layout/header/";
import Footer from "./components/layout/Footer";

import "./scripts/scss/main.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRoute />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
