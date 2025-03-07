import React from "react";
import "../styles/SupportButton.scss";

const SupportButton = ({ setIsSupportOpen }) => {
  return (
    <button
      onClick={() => setIsSupportOpen(prev => !prev)}
      className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all"
    >
      💬
    </button>
  );
};

export default SupportButton;
