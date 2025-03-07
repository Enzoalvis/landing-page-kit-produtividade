import React from "react";
import { FaClock, FaBolt, FaLightbulb } from "react-icons/fa";
import "../styles/Benefits.scss";

const benefitsData = [
  {
    icon: <FaClock />,
    title: "Mais Tempo",
    description: "Aumente sua produtividade e tenha mais tempo livre.",
  },
  {
    icon: <FaBolt />,
    title: "Eficiência Máxima",
    description: "Aplique técnicas testadas para resultados rápidos.",
  },
  {
    icon: <FaLightbulb />,
    title: "Mentalidade de Sucesso",
    description: "Transforme sua rotina com hábitos vencedores.",
  },
];

const Benefits = () => {
  return (
    <section className="benefits-container">
      <h2 className="benefits-title">Benefícios Exclusivos</h2>
      <div className="benefits-grid">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
