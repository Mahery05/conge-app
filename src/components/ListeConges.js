import React from 'react';

const ListeConges = () => {
  const conges = [
    { date: '2024-01-01', status: 'Approuvé' },
    { date: '2024-02-14', status: 'En attente' },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Liste des Congés</h2>
      <ul>
        {conges.map((conge, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span>{conge.date}</span>
            <span>{conge.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeConges;