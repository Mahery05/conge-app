import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="public\dembele.jpg" alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-lg font-bold">Congé Mahery Razakandraina</h1>
      </div>
      <div className="flex items-center">
        <img src="public\dembele.jpg" alt="User" className="h-8 w-8 rounded-full mr-2" />
        <button className="bg-red-500 px-4 py-2 rounded">Déconnexion</button>
      </div>
    </header>
  );
};

export default Header;
