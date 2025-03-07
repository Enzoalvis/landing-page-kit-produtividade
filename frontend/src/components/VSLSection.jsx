import React from "react";
import "../styles/VSLSection.scss";
import { FaPlay } from "react-icons/fa";

const VSLSection = () => {
  return (
    <section className="vsl-container">
      <h2 className="vsl-title">Veja Como Funciona</h2>
      <div className="video-placeholder">
        <div className="play-button">
          <FaPlay />
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
