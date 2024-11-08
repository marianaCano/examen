import React from 'react';
import './Card.css';

function Card({ data }) {
  return (
    <div className="card">
      <h2>Información Ingresada</h2>
      <p>Tu nombre es {data.name} y tu edad es {data.age}.</p>
    </div>
  );
}

export default Card;

