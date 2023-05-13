import React from "react";
import PropTypes from "prop-types";
import "../index.css";

const Cartilla = ({ citaMedica, fecha, medico, especialidad }) => {
  return (
    <div className="sombrita cartilla-container flex flex-col w-5/6 mt-10">
      <h2 className="titulo">Cita Médica</h2>
      <div className="campo">
        <span className="etiqueta">ID:</span>
        <span className="valor">{citaMedica}</span>
      </div>
      <div className="campo">
        <span className="etiqueta">Fecha:</span>
        <span className="valor">{fecha}</span>
      </div>
      <div className="campo">
        <span className="etiqueta">Médico:</span>
        <span className="valor">{medico}</span>
      </div>
      <div className="campo">
        <span className="etiqueta">Especialidad:</span>
        <span className="valor">{especialidad}</span>
      </div>

      <style>
        {`
        .cartilla-container {
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 5px;
          font-family: Arial, sans-serif;
        }

        .titulo {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .campo {
          display: flex;
          margin-bottom: 10px;
        }

        .etiqueta {
          font-weight: bold;
          margin-right: 5px;
        }

        .valor {
          flex-grow: 1;
        }
      `}
      </style>
    </div>
  );
};

Cartilla.propTypes = {
  citaMedica: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  medico: PropTypes.string.isRequired,
  especialidad: PropTypes.string.isRequired,
};

export default Cartilla;
