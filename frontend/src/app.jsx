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
