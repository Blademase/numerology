  import React from "react";
  import Fate from "./pages/fate/fate";
  import Finance from "./pages/finance/finance";
  import Header from "./components/Header/Header";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Additional from "./pages/additional/additional";
import './App.css'
import Compatibility from "./pages/compatibility/compatibility";
import Child from "./pages/child/child";
  function App() {
    return (
      <div className="App">
       <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Fate />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/additional" element={<Additional/>}/>
        <Route path="/compatibility" element={<Compatibility/>}/>
        <Route path="/child" element={<Child/>}/>
      </Routes>
    </Router>
      </div>
    );
  }

  export default App;
