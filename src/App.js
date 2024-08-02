import React from 'react';
import Header from './components/Header';
import Compteur from './components/Compteur';
import ListeConges from './components/ListeConges';
import FormulaireConge from './components/FormulaireConge';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <Compteur />
        <ListeConges />
        <FormulaireConge />
      </div>
    </div>
  );
};

export default App;