function Sobre() {
  const equipe = [
    { nome: "Marivaldo Alcantara", funcao: "Professor", especialidade: "Desenvolvimento Web" },
    { nome: "Ana Beatriz Correia", funcao: "Professora", especialidade: "Banco de Dados" },
    { nome: "Carlos Eduardo Lima", funcao: "Professor", especialidade: "Programação" },
    { nome: "Daniela Santos", funcao: "Professora", especialidade: "UX/UI Design" },
    { nome: "Renato Figueiredo", funcao: "Professor", especialidade: "Inteligência Artificial" },
    { nome: "Tatiane Lopes", funcao: "Professora", especialidade: "DevOps" },
    { nome: "Henrique Souza", funcao: "Professor", especialidade: "Segurança da Informação" },
    { nome: "Patrícia Nunes", funcao: "Professora", especialidade: "Computação em Nuvem" }
  ];

  const valores = [
    {
      icon: "fa-bullseye",
      titulo: "Nossa Missão",
      texto: "Conectar o conhecimento acadêmico com as demandas reais do mercado, formando profissionais preparados, éticos e criativos para os desafios da tecnologia."
    },
    {
      icon: "fa-binoculars",
      titulo: "Nossa Visão",
      texto: "Ser referência regional em ensino de tecnologia, reconhecida pela excelência acadêmica e pela formação de profissionais inovadores."
    },
    {
      icon: "fa-gem",
      titulo: "Nossos Valores",
      texto: "Excelência, inovação, compromisso com o aluno, ética, transparência e colaboração em tudo o que fazemos."
    },
    {
      icon: "fa-heart",
      titulo: "Nossa Cultura",
      texto: "Acolhimento, respeito à diversidade, incentivo à curiosidade e valorização do esforço individual e coletivo."
    }
  ];

  const infraestrutura = [
    {
      icon: "fa-map-location-dot",
      titulo: "Localização",
      texto: "Bloco B — Laboratório de Informática, campus central"
    },
    {
      icon: "fa-building-columns",
      titulo: "Estrutura",
      texto: "Ambiente moderno com equipamentos de ponta para aprendizado prático"
    },
    {
      icon: "fa-people-group",
      titulo: "Comunidade",
      texto: "Mais de 340 alunos e 28 professores engajados no desenvolvimento acadêmico"
    },
    {
      icon: "fa-laptop-code",
      titulo: "Infraestrutura",
      texto: "Laboratórios equipados, biblioteca digital e salas interativas"
    },
    {
      icon: "fa-wifi",
      titulo: "Conectividade",
      texto: "Rede de alta velocidade e acesso livre em todos os espaços do campus"
    },
    {
      icon: "fa-mug-hot",
      titulo: "Espaços de Convivência",
      texto: "Áreas de descanso e café para integração entre alunos e professores"
    }
  ];

  const historia = [
    { ano: "2020", texto: "Criação do curso técnico em Desenvolvimento de Sistemas." },
    { ano: "2021", texto: "Primeira turma formada e início dos projetos integradores." },
    { ano: "2022", texto: "Ampliação do laboratório e início das parcerias com empresas." },
    { ano: "2023", texto: "Reconhecimento regional pela qualidade do ensino oferecido." },
    { ano: "2024", texto: "Lançamento do Portal DSM e das trilhas de aprendizado personalizadas." }
  ];

  return (
    <>
      <div className="page-header">
        <h1><i className="fas fa-circle-info"></i> Sobre</h1>
        <p>Conheça nossa história, nossos valores, nossa estrutura e as pessoas que constroem o Portal DSM</p>
      </div>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-calendar-check"></i></div>
          <span className="number">2020</span>
          <span className="label">Ano de Fundação</span>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-chalkboard-user"></i></div>
          <span className="number">28</span>
          <span className="label">Professores</span>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-star"></i></div>
          <span className="number">4.9</span>
          <span className="label">Avaliação dos Alunos</span>
        </div>
      </div>

      <h3 className="section-title"><i className="fas fa-compass"></i> O Que Nos Move</h3>
      <div className="cards">
        {valores.map((v, i) => (
          <article key={i} className="card">
            <span className="icon"><i className={`fas ${v.icon}`}></i></span>
            <h3>{v.titulo}</h3>
            <p>{v.texto}</p>
          </article>
        ))}
      </div>

      <h3 className="section-title"><i className="fas fa-timeline"></i> Nossa História</h3>
      <div className="info-grid">
        {historia.map((h, i) => (
          <div key={i} className="info-item">
            <div className="info-icon"><i className="fas fa-clock-rotate-left"></i></div>
            <div className="info-content">
              <strong>{h.ano}</strong>
              <span>{h.texto}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 className="section-title"><i className="fas fa-map-location-dot"></i> Localização e Infraestrutura</h3>
      <div className="info-grid">
        {infraestrutura.map((item, i) => (
          <div key={i} className="info-item">
            <div className="info-icon"><i className={`fas ${item.icon}`}></i></div>
            <div className="info-content">
              <strong>{item.titulo}</strong>
              <span>{item.texto}</span>
            </div>
          </div>
        ))}
      </div>

      <h3 className="section-title"><i className="fas fa-people-group"></i> Nossa Equipe</h3>
      <div className="team-grid">
        {equipe.map((membro, i) => (
          <div key={i} className="team-member">
            <div className="avatar"><i className="fas fa-user-tie"></i></div>
            <h4>{membro.nome}</h4>
            <span className="role"><i className="fas fa-briefcase"></i> {membro.funcao}</span>
            <span className="badge"><i className="fas fa-code"></i> {membro.especialidade}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sobre;