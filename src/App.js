import React, { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age } = formData;

    if (name.trim().length >= 3 && age.length >= 1 && !isNaN(age)) {
      setError(false);
      setShowCard(true);
    } else {
      setError(true);
      setShowCard(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Formulario ingreso de datos</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
        </label>
        <label>
          Edad:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="input"
          />
        </label>
        <button type="submit" className="submit-button">Enviar</button>
      </form>

      {error && (
        <p className="error-message">Por favor chequea que la información sea correcta</p>
      )}

      {showCard && <Card data={formData} />}
    </div>
  );
}

export default App;

