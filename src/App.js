import React from 'react';
import { 
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import { Routes } from "react-router"

import TitlePage from "./pages/titlePage";
import ResultPage from "./pages/resultsPage";
import QuestionPage from "./pages/questionPage";

export default function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<TitlePage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/results" element={<ResultPage />} />
        </Routes>
      </Router> 
      {/* <button 
        onClick={() => {
          window.location.href = "/results";
        }}
      >
        Go to Results Page
      </button>
      <button 
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Go to Title Page
      </button> */}
    </>  
  );
}