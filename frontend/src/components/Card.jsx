function Card({ titulo, descricao, carga, nivel, turmas, professor }) {
  const getIcon = () => {
    const icons = {
      "Banco de Dados": "fa-database",
      "Desenvolvimento Web": "fa-globe",
      "Programação": "fa-terminal",
      "Inteligência Artificial": "fa-microchip",
      "DevOps": "fa-cloud",
      "UX/UI Design": "fa-palette",
      "Segurança da Informação": "fa-shield-halved",
      "Computação em Nuvem": "fa-cloud-arrow-up"
    };
    return icons[titulo] || "fa-book";
  };

  return (
    <article className="card">
      <span className="icon"><i className={`fas ${getIcon()}`}></i></span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className="card-badges">
        {carga && <span className="badge"><i className="fas fa-hourglass-half"></i> {carga}</span>}
        {nivel && <span className="badge badge-gray"><i className="fas fa-signal"></i> {nivel}</span>}
        {turmas && <span className="badge"><i className="fas fa-users"></i> {turmas}</span>}
        {professor && <span className="badge badge-gray"><i className="fas fa-chalkboard-user"></i> {professor}</span>}
      </div>
    </article>
  );
}

export default Card;