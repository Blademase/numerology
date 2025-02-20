  import React from "react";
  import Fate from "./pages/fate/fate";
  import Finance from "./pages/finance/finance";
  import Header from "./components/Header/Header";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  function App() {
    return (
      <div>
       <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Fate />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>
    </Router>
      </div>
    );
  }

  export default App;
