import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route}from "react-router-dom";
import Video from './Video.js';

function App() {
  return (
    <div className="app">
       <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/match" element={<Video/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
