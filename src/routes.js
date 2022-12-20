import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Index from "./pages/Index"
import IndexComponent from "./pages/IndexComponent"

export default function Rotas() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index2" element={<IndexComponent />} />
        </Routes>
      </Router>
    );
}

