const API = "https://proweb.leoproti.com.br/alunos";

const listaAlunos = document.getElementById("listaAlunos");
const form = document.getElementById("alunoForm");

const inputId = document.getElementById("idAluno");
const inputNome = document.getElementById("nome");
const inputIdade = document.getElementById("idade");
const inputNota = document.getElementById("nota");
const btnCancelar = document.getElementById("cancelarEdicao");


// ========================
// 1. LISTAR ALUNOS (GET)
// ========================
async function carregarAlunos() {
    listaAlunos.innerHTML = "<tr><td colspan='5'>Carregando...</td></tr>";

    try {
        const resp = await fetch(API);
        const dados = await resp.json();

        listaAlunos.innerHTML = "";

        dados.forEach(aluno => {
            listaAlunos.innerHTML += `
                <tr>
                    <td>${aluno.id}</td>
                    <td>${aluno.nome}</td>
                    <td>${aluno.idade}</td>
                    <td>${aluno.nota}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editarAluno(${aluno.id}, '${aluno.nome}', ${aluno.idade}, ${aluno.nota})">
                            Editar
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="excluirAluno(${aluno.id})">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;
        });

    } catch (erro) {
        listaAlunos.innerHTML =
            "<tr><td colspan='5'>Erro ao carregar alunos</td></tr>";
        console.error(erro);
    }
}

carregarAlunos();


// ========================
// 2. ADICIONAR / EDITAR ALUNO
// ========================
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const aluno = {
        nome: inputNome.value,
        idade: Number(inputIdade.value),
        nota: Number(inputNota.value)
    };

    // MODO EDIÇÃO
    if (inputId.value !== "") {
        await atualizarAluno(inputId.value, aluno);
    } else {
        await criarAluno(aluno);
    }

    form.reset();
    inputId.value = "";
    btnCancelar.classList.add("d-none");

    carregarAlunos();
});


// ========================
// 3. CRIAR ALUNO (POST)
// ========================
async function criarAluno(aluno) {
    try {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(aluno)
        });
    } catch (erro) {
        console.error("Erro ao criar aluno", erro);
    }
}


// ========================
// 4. EDITAR (preencher o formulário)
// ========================
function editarAluno(id, nome, idade, nota) {
    inputId.value = id;
    inputNome.value = nome;
    inputIdade.value = idade;
    inputNota.value = nota;

    btnCancelar.classList.remove("d-none");
}


// ========================
// 5. ATUALIZAR ALUNO (PUT)
// ========================
async function atualizarAluno(id, aluno) {
    try {
        await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(aluno)
        });
    } catch (erro) {
        console.error("Erro ao atualizar aluno", erro);
    }
}


// ========================
// 6. EXCLUIR ALUNO (DELETE)
// ========================
async function excluirAluno(id) {
    const confirmar = confirm("Tem certeza que deseja excluir este aluno?");
    if (!confirmar) return;

    try {
        await fetch(`${API}/${id}`, { method: "DELETE" });
        carregarAlunos();
    } catch (erro) {
        console.error("Erro ao excluir aluno", erro);
    }
}


// ========================
// 7. CANCELAR EDIÇÃO
// ========================
btnCancelar.addEventListener("click", () => {
    form.reset();
    inputId.value = "";
    btnCancelar.classList.add("d-none");
});
