import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getAlunos,
    criarAluno,
    atualizarAluno,
    excluirAluno,
} from "../api/alunos";

export default function AlunosList() {
    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ id: "", nome: "", idade: "", nota: "" });
    const [editing, setEditing] = useState(false);

    async function carregar() {
        setLoading(true);
        try {
            const data = await getAlunos();
            setAlunos(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error(err);
            alert("Erro ao carregar alunos");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregar();
    }, []);

    function onChange(e) {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        const payload = {
            nome: form.nome,
            idade: Number(form.idade),
            nota: Number(form.nota),
        };
        try {
            if (editing && form.id) {
                await atualizarAluno(form.id, payload);
                setEditing(false);
            } else {
                await criarAluno(payload);
            }
            setForm({ id: "", nome: "", idade: "", nota: "" });
            await carregar();
        } catch (err) {
            console.error(err);
            alert("Erro ao salvar aluno");
        }
    }

    function editar(aluno) {
        setForm({
            id: aluno.id,
            nome: aluno.nome ?? "",
            idade: aluno.idade ?? "",
            nota: aluno.nota ?? "",
        });
        setEditing(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    async function remover(id) {
        if (!confirm("Confirmar exclusão?")) return;
        try {
            await excluirAluno(id);
            await carregar();
        } catch (err) {
            console.error(err);
            alert("Erro ao excluir");
        }
    }

    return (
        <div className="container mt-4">
            <h1>Lista de Alunos</h1>

            <div className="card mb-4">
                <div className="card-header">{editing ? "Editar Aluno" : "Adicionar Aluno"}</div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <input type="hidden" name="id" value={form.id} />
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Nome</label>
                                <input className="form-control" name="nome" value={form.nome} onChange={onChange} required />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Idade</label>
                                <input className="form-control" name="idade" type="number" value={form.idade} onChange={onChange} required />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label">Nota</label>
                                <input className="form-control" name="nota" type="number" step="0.1" value={form.nota} onChange={onChange} required />
                            </div>
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-primary me-2" type="submit">{editing ? "Atualizar" : "Salvar"}</button>
                            {editing && (
                                <button type="button" className="btn btn-secondary" onClick={() => { setEditing(false); setForm({ id: "", nome: "", idade: "", nota: "" }); }}>
                                    Cancelar
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <div className="card">
                <div className="card-header">Alunos</div>
                <div className="card-body p-0">
                    {loading ? (
                        <div className="p-3">Carregando...</div>
                    ) : (
                        <table className="table table-striped mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Nota</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alunos.length === 0 && (
                                    <tr><td colSpan="5" className="text-center">Nenhum aluno</td></tr>
                                )}
                                {alunos.map((a) => (
                                    <tr key={a.id}>
                                        <td>{a.id}</td>
                                        <td><Link to={`/aluno/${a.id}`}>{a.nome}</Link></td>
                                        <td>{a.idade}</td>
                                        <td>{a.nota}</td>
                                        <td>
                                            <button className="btn btn-warning btn-sm me-2" onClick={() => editar(a)}>Editar</button>
                                            <button className="btn btn-danger btn-sm" onClick={() => remover(a.id)}>Excluir</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

