export const API = "https://proweb.leoproti.com.br/alunos";

export async function listarAlunos() {
    const resp = await fetch(API);
    return await resp.json();
}

export async function atualizarAluno(id, dados) {
    await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
    });
}

export async function criarAluno(dados) {
    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
    });
}

