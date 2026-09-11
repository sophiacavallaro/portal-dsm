function Home() {
  const destaques = [
    {
      icon: "fa-trophy",
      titulo: "Hackathon Interno 2024",
      texto: "Equipes de alunos desenvolveram soluções inovadoras para problemas reais da comunidade acadêmica."
    },
    {
      icon: "fa-microphone-lines",
      titulo: "Palestra: Carreira em Tech",
      texto: "Ex-alunos compartilharam suas trajetórias e dicas para quem está começando na área de tecnologia."
    },
    {
      icon: "fa-hand-holding-heart",
      titulo: "Projeto Social de Inclusão Digital",
      texto: "Alunos ensinam informática básica para a comunidade do entorno do campus."
    }
  ];

  return (
    <>
      <div className="page-header">
        <h1><i className="fas fa-house"></i> Início</h1>
        <p>Bem-vindo ao Portal DSM — um espaço de aprendizado, descoberta e crescimento contínuo</p>
      </div>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-user-graduate"></i></div>
          <span className="number">342</span>
          <span className="label">Alunos Ativos</span>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-book-bookmark"></i></div>
          <span className="number">12</span>
          <span className="label">Cursos Disponíveis</span>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-chalkboard-user"></i></div>
          <span className="number">28</span>
          <span className="label">Professores</span>
        </div>
      </div>

      <div className="hero">
        <div className="hero-image">
          <img src="/img/curso.svg" alt="Portal DSM" />
        </div>
        <div className="hero-text">
          <h2><i className="fas fa-compass"></i> Portal DSM — Sua Jornada Começa Aqui</h2>
          <p>
            O Portal DSM reúne tudo o que você precisa para trilhar uma carreira sólida em tecnologia:
            conteúdos atualizados, professores experientes, laboratórios modernos e uma comunidade
            que valoriza a colaboração e o crescimento conjunto.
          </p>
          <p>
            Aqui, o conhecimento é construído passo a passo. Cada disciplina, cada projeto e cada
            conversa com um colega ou professor contribui para a formação de profissionais completos,
            preparados para os desafios reais do mercado.
          </p>
          <p>
            Nossa missão é simples e ambiciosa: transformar curiosidade em competência, e competência
            em oportunidades reais de carreira.
          </p>
          <div className="hero-badges">
            <span className="badge"><i className="fas fa-graduation-cap"></i> Ensino de Excelência</span>
            <span className="badge badge-gray"><i className="fas fa-flask"></i> Laboratórios Modernos</span>
            <span className="badge"><i className="fas fa-handshake"></i> Comunidade Ativa</span>
          </div>
        </div>
      </div>

      <h3 className="section-title"><i className="fas fa-star"></i> Destaques do Mês</h3>
      <div className="cards">
        {destaques.map((d, i) => (
          <article key={i} className="card">
            <span className="icon"><i className={`fas ${d.icon}`}></i></span>
            <h3>{d.titulo}</h3>
            <p>{d.texto}</p>
          </article>
        ))}
      </div>

      <h3 className="section-title"><i className="fas fa-bell"></i> Avisos e Notícias</h3>
      <div className="info-grid">
        <div className="info-item">
          <div className="info-icon"><i className="fas fa-newspaper"></i></div>
          <div className="info-content">
            <strong>Últimas Notícias</strong>
            <span>Novo curso de Inteligência Artificial já está com matrículas abertas</span>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon"><i className="fas fa-calendar-check"></i></div>
          <div className="info-content">
            <strong>Eventos</strong>
            <span>Workshop de React acontece dia 15 de setembro — inscrições até dia 12</span>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon"><i className="fas fa-award"></i></div>
          <div className="info-content">
            <strong>Destaques</strong>
            <span>Aluna Larissa Monteiro venceu o Hackathon Interno com projeto de acessibilidade</span>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon"><i className="fas fa-bullhorn"></i></div>
          <div className="info-content">
            <strong>Avisos</strong>
            <span>Rematrículas para o próximo semestre vão até o dia 30 de novembro</span>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon"><i className="fas fa-book-open-reader"></i></div>
          <div className="info-content">
            <strong>Biblioteca</strong>
            <span>Novos títulos de programação e engenharia de software disponíveis para empréstimo</span>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon"><i className="fas fa-briefcase"></i></div>
          <div className="info-content">
            <strong>Estágios</strong>
            <span>Três empresas parceiras abriram vagas exclusivas para alunos do 4º DSM</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;