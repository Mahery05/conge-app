import React from 'react';

const Compteur = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Récapitulatif des Congés</h2>
      <p>Jours posés cette année : 10</p>
      <p>Jours restants : 15</p>
    </div>
  );
};

export default Compteur;