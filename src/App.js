import './App.css';
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Layout} from "./components/layout/components/Layout";

function App() {

  return (
      <Router>
        <div className="App" >
            <Layout/>
        </div>
      </Router>
  );
}

export default App;
