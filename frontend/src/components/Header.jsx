import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-700 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Kit Produtividade</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-white hover:underline">Sobre</a></li>
            <li><a href="#benefits" className="text-white hover:underline">Benefícios</a></li>
            <li><a href="#faq" className="text-white hover:underline">FAQ</a></li>
            <li><a href="#pricing" className="text-white hover:underline">Preços</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;