const API_URL = "http://localhost:3000";

async function tratarResposta(resposta, mensagem) {
    if (!resposta.ok) {
        let erro = mensagem;

        try {
            const dados = await resposta.json();

            if (dados.erro) {
                erro = dados.erro;
            }
        } catch {
            erro = mensagem;
        }

        throw new Error(erro);
    }

    return await resposta.json();
}

export async function verificarAPI() {
    const resposta = await fetch(`${API_URL}/status`);

    return tratarResposta(
        resposta,
        "Não foi possível conectar com o servidor."
    );
}

export async function listarUsuarios() {
    const resposta = await fetch(`${API_URL}/usuarios`);

    return tratarResposta(
        resposta,
        "Erro ao buscar usuários."
    );
}

export async function buscarUsuario(id) {
    const resposta = await fetch(`${API_URL}/usuarios/${id}`);

    return tratarResposta(
        resposta,
        "Erro ao buscar usuário."
    );
}

export async function cadastrarUsuario(usuario) {
    const resposta = await fetch(`${API_URL}/usuarios`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    return tratarResposta(
        resposta,
        "Erro ao cadastrar usuário."
    );
}

export async function atualizarUsuario(id, usuario) {
    const resposta = await fetch(`${API_URL}/usuarios/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    return tratarResposta(
        resposta,
        "Erro ao atualizar usuário."
    );
}

export async function excluirUsuario(id) {
    const resposta = await fetch(`${API_URL}/usuarios/${id}`, {
        method: "DELETE"
    });

    return tratarResposta(
        resposta,
        "Erro ao excluir usuário."
    );
}

export async function listarCursos() {
    const resposta = await fetch(`${API_URL}/cursos`);

    return tratarResposta(
        resposta,
        "Erro ao buscar cursos."
    );
}

export async function buscarCurso(id) {
    const resposta = await fetch(`${API_URL}/cursos/${id}`);

    return tratarResposta(
        resposta,
        "Erro ao buscar curso."
    );
}

export async function cadastrarCurso(curso) {
    const resposta = await fetch(`${API_URL}/cursos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(curso)
    });

    return tratarResposta(
        resposta,
        "Erro ao cadastrar curso."
    );
}

export async function atualizarCurso(id, curso) {
    const resposta = await fetch(`${API_URL}/cursos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(curso)
    });

    return tratarResposta(
        resposta,
        "Erro ao atualizar curso."
    );
}

export async function excluirCurso(id) {
    const resposta = await fetch(`${API_URL}/cursos/${id}`, {
        method: "DELETE"
    });

    return tratarResposta(
        resposta,
        "Erro ao excluir curso."
    );
}