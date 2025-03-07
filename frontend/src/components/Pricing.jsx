import React from "react";
import "../styles/Pricing.scss";

const plans = [
  {
    name: "Básico",
    price: "R$49",
    features: ["Acesso vitalício", "Atualizações grátis", "Suporte limitado"],
  },
  {
    name: "Premium",
    price: "R$80",
    features: ["Tudo do Básico", "Bônus exclusivos", "Suporte 24/7"],
    highlight: true, // Destacar este plano
  },
  {
    name: "Pro",
    price: "R$150",
    features: ["Tudo do Premium", "Consultoria 1:1", "Materiais avançados"],
  },
];

const Pricing = () => {
  return (
    <section className="pricing-container">
      <h2 className="pricing-title">Escolha Seu Plano</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.highlight ? "highlight" : ""}`}>
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="plan-button">Assinar</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
