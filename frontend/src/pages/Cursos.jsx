import Card from "../components/Card";

function Cursos() {
  const cursos = [
    {
      titulo: "Banco de Dados",
      descricao: "Modelagem relacional e não-relacional, SQL avançado, MongoDB e otimização de consultas para sistemas de alta escala.",
      carga: "80h",
      nivel: "Avançado",
      turmas: "4 turmas",
      professor: "Prof. Ana Beatriz"
    },
    {
      titulo: "Desenvolvimento Web",
      descricao: "Aplicações web modernas com React, Vite, integração com APIs RESTful e boas práticas de arquitetura front-end.",
      carga: "120h",
      nivel: "Intermediário",
      turmas: "5 turmas",
      professor: "Prof. Marivaldo Alcantara"
    },
    {
      titulo: "Programação",
      descricao: "Lógica de programação, estruturas de dados, algoritmos clássicos e resolução de problemas com boas práticas.",
      carga: "100h",
      nivel: "Básico",
      turmas: "6 turmas",
      professor: "Prof. Carlos Eduardo"
    },
    {
      titulo: "Inteligência Artificial",
      descricao: "Fundamentos de IA, machine learning supervisionado e não supervisionado, redes neurais e aplicações práticas.",
      carga: "90h",
      nivel: "Avançado",
      turmas: "3 turmas",
      professor: "Prof. Renato Figueiredo"
    },
    {
      titulo: "DevOps",
      descricao: "Integração contínua, deploy automatizado, containers com Docker, orquestração com Kubernetes e monitoramento.",
      carga: "60h",
      nivel: "Intermediário",
      turmas: "2 turmas",
      professor: "Prof. Tatiane Lopes"
    },
    {
      titulo: "UX/UI Design",
      descricao: "Design de interfaces centrado no usuário, prototipação, testes de usabilidade e experiência do usuário.",
      carga: "70h",
      nivel: "Básico",
      turmas: "3 turmas",
      professor: "Prof. Daniela Santos"
    },
    {
      titulo: "Segurança da Informação",
      descricao: "Fundamentos de segurança, criptografia, análise de vulnerabilidades e boas práticas de proteção de dados.",
      carga: "75h",
      nivel: "Avançado",
      turmas: "2 turmas",
      professor: "Prof. Henrique Souza"
    },
    {
      titulo: "Computação em Nuvem",
      descricao: "Fundamentos de AWS, Azure e Google Cloud, arquitetura de sistemas distribuídos e escalabilidade.",
      carga: "65h",
      nivel: "Intermediário",
      turmas: "3 turmas",
      professor: "Prof. Patrícia Nunes"
    }
  ];

  const trilhas = [
    {
      icon: "fa-rocket",
      titulo: "Trilha de Desenvolvimento",
      texto: "Programação → Desenvolvimento Web → DevOps → Computação em Nuvem"
    },
    {
      icon: "fa-brain",
      titulo: "Trilha de Dados e IA",
      texto: "Banco de Dados → Programação → Inteligência Artificial"
    },
    {
      icon: "fa-wand-magic-sparkles",
      titulo: "Trilha de Design e Experiência",
      texto: "UX/UI Design → Desenvolvimento Web → Segurança da Informação"
    }
  ];

  return (
    <>
      <div className="page-header">
        <h1><i className="fas fa-book-bookmark"></i> Cursos</h1>
        <p>Explore nossa grade de cursos e construa sua própria trilha de aprendizado</p>
      </div>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-book"></i></div>
          <span className="number">{cursos.length}</span>
          <span className="label">Cursos Disponíveis</span>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-hourglass-half"></i></div>
          <span className="number">660h</span>
          <span className="label">Carga Horária Total</span>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-layer-group"></i></div>
          <span className="number">8</span>
          <span className="label">Áreas de Conhecimento</span>
        </div>
      </div>

      <div className="hero">
        <div className="hero-image">
          <img src="/img/curso.svg" alt="Curso DSM" />
        </div>
        <div className="hero-text">
          <h2><i className="fas fa-graduation-cap"></i> Formação em Desenvolvimento de Sistemas</h2>
          <p>
            O curso de Desenvolvimento de Sistemas do Portal DSM é uma formação completa e atualizada
            que prepara os alunos para os desafios reais do mercado de tecnologia. Com grade curricular
            moderna e professores altamente qualificados, oferecemos uma experiência de aprendizado
            única e transformadora.
          </p>
          <p>
            Cada disciplina foi desenhada para equilibrar teoria e prática, com projetos reais, mentorias
            e avaliações contínuas que preparam o aluno para os desafios do dia a dia profissional.
          </p>
          <p>
            Nossos cursos são desenvolvidos com base nas demandas do setor, garantindo que os estudantes
            estejam sempre um passo à frente das tendências tecnológicas.
          </p>
          <div className="hero-badges">
            <span className="badge"><i className="fas fa-certificate"></i> Certificado Reconhecido</span>
            <span className="badge badge-gray"><i className="fas fa-user-group"></i> +340 Alunos</span>
            <span className="badge"><i className="fas fa-star"></i> 4.9 Avaliação</span>
          </div>
        </div>
      </div>

      <h3 className="section-title"><i className="fas fa-route"></i> Trilhas Sugeridas</h3>
      <div className="cards">
        {trilhas.map((t, i) => (
          <article key={i} className="card">
            <span className="icon"><i className={`fas ${t.icon}`}></i></span>
            <h3>{t.titulo}</h3>
            <p>{t.texto}</p>
          </article>
        ))}
      </div>

      <h3 className="section-title"><i className="fas fa-list-check"></i> Grade Completa</h3>
      <section className="cards">
        {cursos.map((curso, index) => (
          <Card
            key={index}
            titulo={curso.titulo}
            descricao={curso.descricao}
            carga={curso.carga}
            nivel={curso.nivel}
            turmas={curso.turmas}
            professor={curso.professor}
          />
        ))}
      </section>
    </>
  );
}

export default Cursos;