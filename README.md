# Estudo de Caso — Sistema de Alunos

Este projeto é um estudo de caso dividido em **duas partes**: Web e Mobile. Ele permite listar, visualizar detalhes e cadastrar alunos consumindo uma API REST.  

---

## 🖥 Web (React + Vite)

### Tecnologias utilizadas
- React
- Vite
- React Router DOM
- Axios
- React Bootstrap
- Vitest + React Testing Library

### Funcionalidades
- Página inicial com listagem de alunos
- Página de detalhes do aluno
- Navegação entre rotas
- Consumo da API REST de alunos
- Testes automatizados

## 📱 Mobile (React Native + Expo)
### Tecnologias utilizadas

- React Native
- Expo
- React Navigation
- Axios

### Funcionalidades

- Tela inicial com botões de navegação
- Listagem de alunos
- Tela de detalhes do aluno
- Cadastro de novos alunos
- Consumo da mesma API REST da versão web

## 🔗 Rotas implementadas
### Web

/ → Listagem de alunos
/alunos/:id → Detalhes do aluno

### Mobile

HomeScreen → Tela inicial
AlunosScreen → Listagem de alunos
DetalhesScreen → Detalhes e edição do aluno
CadastrarAlunoScreen → Cadastro de aluno

## 🔧 API

### URL Base: https://proweb.leoproti.com.br/alunos
GET /alunos → Listar alunos
POST /alunos → Cadastrar aluno
PUT /alunos/:id → Atualizar aluno

## 📚 Créditos / Referências

React: https://react.dev/
Vite: https://vitejs.dev/
React Router DOM: https://reactrouter.com/
Axios: https://axios-http.com/
Expo: https://expo.dev/
React Native: https://reactnative.dev/
React Testing Library: https://testing-library.com/
Vitest: https://vitest.dev/
Auditoria realizada por: **Pedro Lucas Pereira**