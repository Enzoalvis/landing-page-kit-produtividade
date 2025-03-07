import React, { useState } from "react";
import "../styles/FAQ.scss";

const faqData = [
  {
    question: "Como funciona o produto?",
    answer: "Nosso sistema ajuda você a aumentar a produtividade com técnicas comprovadas.",
  },
  {
    question: "Preciso pagar alguma taxa extra?",
    answer: "Não! O valor é único e você terá acesso vitalício ao conteúdo.",
  },
  {
    question: "Existe garantia de satisfação?",
    answer: "Sim! Você tem 7 dias para testar e, se não gostar, devolvemos seu dinheiro.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-container">
      <h2 className="faq-title">Perguntas Frequentes</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
