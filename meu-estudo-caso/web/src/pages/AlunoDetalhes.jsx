import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAlunoById } from "../api/alunos";

export default function AlunoDetalhes() {
    const { id } = useParams();
    const [aluno, setAluno] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAluno() {
            try {
                setLoading(true);
                const data = await getAlunoById(id);
                setAluno(data);
            } catch (err) {
                console.error(err);
                alert("Erro ao buscar detalhes");
            } finally {
                setLoading(false);
            }
        }
        fetchAluno();
    }, [id]);

    if (loading) return <div className="container mt-4">Carregando...</div>;
    if (!aluno) return <div className="container mt-4">Aluno não encontrado</div>;

    return (
        <div className="container mt-4">
            <h1>Detalhes do Aluno</h1>
            <div className="card">
                <div className="card-body">
                    <h3>{aluno.nome}</h3>
                    <p><strong>ID:</strong> {aluno.id}</p>
                    <p><strong>Idade:</strong> {aluno.idade}</p>
                    <p><strong>Nota:</strong> {aluno.nota}</p>
                    <Link to="/" className="btn btn-secondary">Voltar</Link>
                </div>
            </div>
        </div>
    );
}

