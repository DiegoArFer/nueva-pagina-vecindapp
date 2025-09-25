'use client';

export default function Navigation() {
  const handleShowForm = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && window.showRequestForm) {
      window.showRequestForm();
    }
  };

  return (
    <nav>
      <a href="#" onClick={handleShowForm}>
        Realizar solicitud
      </a>
      <a href="#">Estado de solicitud</a>
      <a href="#">Contacto</a>
    </nav>
  );
}