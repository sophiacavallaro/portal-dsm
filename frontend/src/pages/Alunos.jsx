import { useEffect, useState } from "react";
import { listarUsuarios, cadastrarUsuario, atualizarUsuario, excluirUsuario } from "../api/api";

const alunosIniciais = [
  { id: 1, nome: "Larissa Monteiro", email: "larissa.monteiro@dsm.edu.br", telefone: "(11) 98765-4321", curso: "Desenvolvimento Web" },
  { id: 2, nome: "Gabriel Vasconcelos", email: "gabriel.vasconcelos@dsm.edu.br", telefone: "(11) 99876-5432", curso: "Banco de Dados" },
  { id: 3, nome: "Beatriz Figueiredo", email: "beatriz.figueiredo@dsm.edu.br", telefone: "(11) 97654-3210", curso: "Inteligência Artificial" },
  { id: 4, nome: "Thiago Albuquerque", email: "thiago.albuquerque@dsm.edu.br", telefone: "(11) 96543-2109", curso: "DevOps" },
  { id: 5, nome: "Camila Rezende", email: "camila.rezende@dsm.edu.br", telefone: "(11) 95432-1098", curso: "UX/UI Design" },
  { id: 6, nome: "Rafael Siqueira", email: "rafael.siqueira@dsm.edu.br", telefone: "(11) 94321-0987", curso: "Programação" },
  { id: 7, nome: "Isabela Nogueira", email: "isabela.nogueira@dsm.edu.br", telefone: "(11) 93210-9876", curso: "Segurança da Informação" },
  { id: 8, nome: "Matheus Andrade", email: "matheus.andrade@dsm.edu.br", telefone: "(11) 92109-8765", curso: "Computação em Nuvem" }
];

function Alunos() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  useEffect(() => {
    carregarUsuarios();
  }, []);

  function carregarUsuarios() {
    setCarregando(true);
    setErro("");
    listarUsuarios()
      .then((dados) => {
        setUsuarios(dados && dados.length ? dados : alunosIniciais);
      })
      .catch(() => {
        setUsuarios(alunosIniciais);
      })
      .finally(() => {
        setCarregando(false);
      });
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.nome || !form.email) {
      setErro("Nome e e-mail são obrigatórios.");
      return;
    }

    if (editando) {
      atualizarUsuario(editando, form)
        .then(() => {
          setEditando(null);
          setForm({ nome: "", email: "", telefone: "" });
          carregarUsuarios();
          setErro("");
        })
        .catch(() => {
          setUsuarios((prev) =>
            prev.map((u) => (u.id === editando ? { ...u, ...form } : u))
          );
          setEditando(null);
          setForm({ nome: "", email: "", telefone: "" });
          setErro("");
        });
    } else {
      cadastrarUsuario(form)
        .then(() => {
          setForm({ nome: "", email: "", telefone: "" });
          carregarUsuarios();
          setErro("");
        })
        .catch(() => {
          const novo = { id: Date.now(), ...form };
          setUsuarios((prev) => [novo, ...prev]);
          setForm({ nome: "", email: "", telefone: "" });
          setErro("");
        });
    }
  }

  function handleEditar(usuario) {
    setEditando(usuario.id);
    setForm({
      nome: usuario.nome,
      email: usuario.email,
      telefone: usuario.telefone || ""
    });
    setErro("");
  }

  function handleExcluir(id) {
    if (window.confirm("Tem certeza que deseja excluir este aluno?")) {
      excluirUsuario(id)
        .then(() => carregarUsuarios())
        .catch(() => {
          setUsuarios((prev) => prev.filter((u) => u.id !== id));
        });
    }
  }

  function cancelarEdicao() {
    setEditando(null);
    setForm({ nome: "", email: "", telefone: "" });
    setErro("");
  }

  function iniciais(nome) {
    const partes = nome.trim().split(" ");
    const p1 = partes[0]?.[0] || "";
    const p2 = partes[partes.length - 1]?.[0] || "";
    return (p1 + p2).toUpperCase();
  }

  return (
    <>
      <div className="page-header">
        <h1><i className="fas fa-user-graduate"></i> Alunos</h1>
        <p>Gerencie os alunos matriculados no Portal DSM — cadastre, edite e acompanhe</p>
      </div>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-users"></i></div>
          <span className="number">{usuarios.length}</span>
          <span className="label">Alunos Cadastrados</span>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-user-check"></i></div>
          <span className="number">{usuarios.filter((u) => u.telefone).length}</span>
          <span className="label">Com Telefone</span>
        </div>
        <div className="stat-item">
          <div className="stat-icon"><i className="fas fa-envelope"></i></div>
          <span className="number">{usuarios.filter((u) => u.email).length}</span>
          <span className="label">Com E-mail</span>
        </div>
      </div>

      {erro && (
        <div className="alerta">
          <i className="fas fa-circle-exclamation"></i> {erro}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-aluno">
        <input
          type="text"
          name="nome"
          placeholder="Nome completo do aluno"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail institucional"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone para contato"
          value={form.telefone}
          onChange={handleChange}
        />
        <button type="submit" className={`btn ${editando ? "btn-gray" : "btn-primary"}`}>
          <i className={`fas ${editando ? "fa-pen" : "fa-user-plus"}`}></i>
          {editando ? "Atualizar" : "Cadastrar"}
        </button>
        {editando && (
          <button type="button" onClick={cancelarEdicao} className="btn btn-ghost">
            <i className="fas fa-xmark"></i> Cancelar
          </button>
        )}
      </form>

      {carregando && (
        <div className="estado-carregando">
          <i className="fas fa-spinner fa-spin"></i> Carregando alunos...
        </div>
      )}

      {!carregando && usuarios.length === 0 && (
        <div className="estado-vazio">
          <i className="fas fa-folder-open"></i>
          Nenhum aluno cadastrado até o momento. Comece adicionando o primeiro!
        </div>
      )}

      {!carregando && usuarios.length > 0 && (
        <ul className="lista-alunos">
          {usuarios.map((usuario) => (
            <li key={usuario.id} className="aluno-item">
              <div className="aluno-info">
                <div className="aluno-avatar">{iniciais(usuario.nome)}</div>
                <div className="dados">
                  <strong>{usuario.nome}</strong>
                  <span>
                    <i className="fas fa-envelope"></i> {usuario.email}
                    {usuario.telefone && (
                      <>
                        {" "}• <i className="fas fa-phone"></i> {usuario.telefone}
                      </>
                    )}
                    {usuario.curso && (
                      <>
                        {" "}• <i className="fas fa-book"></i> {usuario.curso}
                      </>
                    )}
                  </span>
                </div>
              </div>
              <div className="aluno-acoes">
                <button
                  onClick={() => handleEditar(usuario)}
                  className="btn-icon btn-edit"
                  title="Editar"
                >
                  <i className="fas fa-pen"></i>
                </button>
                <button
                  onClick={() => handleExcluir(usuario.id)}
                  className="btn-icon btn-delete"
                  title="Excluir"
                >
                  <i className="fas fa-trash-can"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Alunos;