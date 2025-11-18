import axios from "axios";

export const API_BASE = "https://proweb.leoproti.com.br/alunos";

export async function getAlunos() {
    const { data } = await axios.get(API_BASE);
    return data;
}

export async function getAlunoById(id) {
    const { data } = await axios.get(`${API_BASE}/${id}`);
    return data;
}

export async function criarAluno(payload) {
    const { data } = await axios.post(API_BASE, payload);
    return data;
}

export async function atualizarAluno(id, payload) {
    const { data } = await axios.put(`${API_BASE}/${id}`, payload);
    return data;
}

export async function excluirAluno(id) {
    const { data } = await axios.delete(`${API_BASE}/${id}`);
    return data;
}

