import React, { useState, useEffect } from "react";
import useSpeechRecognition from "../utils/useSpeechRecognition";
import styles from "../styles/SupportMenu.module.scss";

const SupportMenu = ({ isSupportOpen, setIsSupportOpen }) => {
  const { transcript, isListening, setIsListening } = useSpeechRecognition();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (transcript) {
      setInputText(transcript);
    }
  }, [transcript]);

  return (
    <div className={`${styles.menu} ${isSupportOpen ? styles.open : styles.closed}`}>
      {/* Botão para fechar */}
      <button onClick={() => setIsSupportOpen(false)} className="absolute top-4 right-4 text-white text-2xl">
        ✖
      </button>

      {/* Conteúdo do menu */}
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Suporte</h2>

        {/* Input de texto */}
        <input
          type="text"
          placeholder="Digite sua dúvida..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none"
        />

        {/* Botão do microfone */}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white w-full p-2 rounded flex items-center justify-center"
          onClick={() => setIsListening((prev) => !prev)}
        >
          {isListening ? "🎙️ Ouvindo..." : "🎤 Usar Microfone"}
        </button>
      </div>
    </div>
  );
};

export default SupportMenu;
