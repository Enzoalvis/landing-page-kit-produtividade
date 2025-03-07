import { useState, useEffect } from "react";

const useSpeechRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Seu navegador não suporta reconhecimento de voz.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "pt-BR";

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => setTranscript(event.results[0][0].transcript);
    recognition.onend = () => setIsListening(false);

    if (isListening) {
      recognition.start();
    }

    return () => recognition.stop();
  }, [isListening]);

  return { transcript, isListening, setIsListening };
};

export default useSpeechRecognition;
