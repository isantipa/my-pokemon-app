import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ViewModeProvider } from './context/ViewModeContext';
import Home from './pages/Home';
import PokemonPage from './pages/PokemonPage'; 
import Header from './components/Header';
import './assets/styles/styles.css';

function App() {
  return (
    <Router>
      <ViewModeProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:id" element={<PokemonPage />} />
          </Routes>
        </main>
      </ViewModeProvider>
    </Router>
  );
}

export default App;