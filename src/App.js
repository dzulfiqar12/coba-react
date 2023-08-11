import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Video from './pages/Video';
import VideoDetail from './pages/VideoDetail';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Video />} />
      </Routes>
      <Routes>
        <Route path="/detail/:id" element={<VideoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
