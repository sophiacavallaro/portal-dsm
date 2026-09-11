import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <i className="fas fa-compass"></i>
        </div>
        <h2>Portal DSM</h2>
        <p>Academia Digital</p>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}>
          <i className="fas fa-house"></i>
          <span>Início</span>
        </NavLink>
        <NavLink to="/alunos" className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}>
          <i className="fas fa-user-graduate"></i>
          <span>Alunos</span>
        </NavLink>
        <NavLink to="/cursos" className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}>
          <i className="fas fa-book-bookmark"></i>
          <span>Cursos</span>
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}>
          <i className="fas fa-circle-info"></i>
          <span>Sobre</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <i className="fas fa-graduation-cap"></i>
        <p>4º DSM • 2024<br />Desenvolvimento de Sistemas</p>
      </div>
    </aside>
  );
}

export default Sidebar;