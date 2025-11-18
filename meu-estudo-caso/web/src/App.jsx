import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AlunosList from "./pages/AlunosList";
import AlunoDetalhes from "./pages/AlunoDetalhes";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Estudo de Caso - Alunos</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<AlunosList />} />
        <Route path="/aluno/:id" element={<AlunoDetalhes />} />
      </Routes>
    </BrowserRouter>
  );
}
