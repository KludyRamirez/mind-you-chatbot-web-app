import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./pages/Chatbot";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Chatbot />} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
