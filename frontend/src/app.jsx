import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SupportButton from "./components/SupportButton";
import Testimonials from "./components/Testimonials";
import VSLSection from "./components/VSLSection";
import About from "./components/About";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Header />
        <main className="container mx-auto p-4">
          <SupportButton />
          <Testimonials />
          <VSLSection />
          <About />
          <Benefits />
          <FAQ />
          <Pricing />
        </main>
      </div>
      {/* Área para Pixel de Rastreamento */}
      <script>
        {/* Aqui você pode adicionar scripts do Pixel da Meta e Google Ads */}
      </script>
    </Router>
  );
}

export default App;

// Configuração do Backend com Node.js, Express e SQL
const express = require("express");
const cors = require("cors");
const db = require("./backend/config/db");
const trackingRoutes = require("./backend/routes/trackingRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/tracking", trackingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Configuração do Banco de Dados (SQL seguro)
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password123", // Altere para uma senha segura
  database: "tracking_db",
});
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco de dados: ", err);
    return;
  }
  console.log("Banco de dados conectado!");
});

module.exports = connection;

// Modelo para armazenar dados do Pixel
const db = require("../config/db");
class TrackingData {
  static savePixelData(event, data) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO pixel_data (event, data) VALUES (?, ?)";
      db.query(query, [event, JSON.stringify(data)], (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
}
module.exports = TrackingData;

// Rotas para o Pixel da Meta e Google Ads
const express = require("express");
const router = express.Router();
const TrackingController = require("../controllers/trackingController");

router.post("/save", TrackingController.savePixelData);

module.exports = router;

// Controlador para salvar os dados do Pixel
const TrackingData = require("../models/TrackingData");
exports.savePixelData = async (req, res) => {
  try {
    const { event, data } = req.body;
    await TrackingData.savePixelData(event, data);
    res.status(200).json({ message: "Dados do Pixel salvos com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao salvar os dados" });
  }
};
import React, { useEffect } from "react";
import savePixelData from "./utils/fetchPixelData";

function App() {
  useEffect(() => {
    // Simulação de evento de página carregada
    savePixelData("page_view", { url: window.location.href });

    // Adicionando eventos de clique
    const handleButtonClick = () => {
      savePixelData("button_click", { button: "Comprar Agora" });
    };

    document
      .getElementById("cta-button")
      ?.addEventListener("click", handleButtonClick);

    return () => {
      document
        .getElementById("cta-button")
        ?.removeEventListener("click", handleButtonClick);
    };
  }, []);

  return (
    <div>
      <h1>Bem-vindo à Landing Page</h1>
      <button id="cta-button">Comprar Agora</button>
    </div>
  );
}

export default App;
// Controlador para salvar os dados do Pixel
import React, { useEffect } from "react";
import "./styles/global.scss";
import "./styles/animations.scss";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <h1 className="fade-in">Bem-vindo à Landing Page</h1>
      <button className="fade-in">Comprar Agora</button>
    </div>
  );
}

export default App;
import SupportChat from "./components/SupportChat";
import "./styles/SupportChat.scss";

function App() {
  return (
    <div className="app">
      <SupportChat />
    </div>
  );
}

export default App;
