import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "VecindApp",
  description: "Plataforma vecinal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Banner superior con nombre */}

        {/* Barra con logo y botones */}
        <header>
          
          <div className="logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className="top-banner">
          <h1>VecindApp</h1>
        </div>
          <div className="buttons">
            <button className="register">Registrarse</button>
            <button className="login">Ingresar</button>
          </div>
        </header>

        <div className="container">
          {/* Menú lateral */}
          <aside>
            <Navigation />
          </aside>

          {/* Contenido principal */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
