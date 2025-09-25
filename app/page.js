'use client';

import { useState } from 'react';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    direccion: '',
    telefono: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí puedes agregar la lógica para procesar el formulario
    alert('Solicitud enviada correctamente');
    setShowForm(false);
    setFormData({
      nombre: '',
      apellido: '',
      correo: '',
      direccion: '',
      telefono: ''
    });
  };

  const handleBackToMap = () => {
    setShowForm(false);
  };

  // Exponer la función globalmente para que pueda ser llamada desde el layout
  if (typeof window !== 'undefined') {
    window.showRequestForm = () => setShowForm(true);
  }

  return (
    <div className="content-container">
      {!showForm ? (
        <div className="map-container">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-70.75%2C-33.6%2C-70.55%2C-33.4&layer=mapnik&marker=-33.45%2C-70.65"
            style={{ border: "none", width: "100%", height: "100%" }}
          ></iframe>
        </div>
      ) : (
        <div className="form-container">
          <div className="form-header">
            <h2>Realizar Solicitud</h2>
            <button 
              className="back-button" 
              onClick={handleBackToMap}
              type="button"
            >
              ← Volver al mapa
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="request-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="apellido">Apellido *</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico *</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Dirección *</label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">
                Enviar Solicitud
              </button>
              <button 
                type="button" 
                className="cancel-button" 
                onClick={handleBackToMap}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
