import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          <span className="navbar-brand-icon">
            <i className="fas fa-compass"></i>
          </span>
          <span className="navbar-brand-text">
            <strong>Portal DSM</strong>
            <small>Academia Digital</small>
          </span>
        </NavLink>

        <nav className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}>
            <i className="fas fa-house"></i>
            <span>Início</span>
          </NavLink>
          <NavLink to="/alunos" className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}>
            <i className="fas fa-user-graduate"></i>
            <span>Alunos</span>
          </NavLink>
          <NavLink to="/cursos" className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}>
            <i className="fas fa-book-bookmark"></i>
            <span>Cursos</span>
          </NavLink>
          <NavLink to="/sobre" className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}>
            <i className="fas fa-circle-info"></i>
            <span>Sobre</span>
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <span className="navbar-badge">
            <i className="fas fa-bell"></i>
            <span className="navbar-badge-dot"></span>
          </span>
          <span className="navbar-user">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;