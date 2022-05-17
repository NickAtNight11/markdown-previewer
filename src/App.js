import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarkdownPreviewer from "./components/MarkdownPreviewer";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/markdown-previewer' exact element={<MarkdownPreviewer/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
