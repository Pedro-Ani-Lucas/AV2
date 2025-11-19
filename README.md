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

##🚀 Instruções de Instalação e Execução
###📌 Pré-requisitos

Node.js instalado (versão 18+ recomendada)

NPM ou Yarn

###📦 Instalação

cd web

npm install

###▶️ Execução em ambiente de desenvolvimento

npm run dev

A aplicação será iniciada normalmente em algo como:

http://localhost:5173

###🧪 Rodar Testes Automatizados

npm run test

###🏗️ Build para produção

npm run build

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

###📌 Pré-requisitos

- Node.js

- Expo CLI instalado globalmente:

npm install -g expo-cli

*Aplicativo Expo Go no celular ou emulador Android/iOS instalado no computador.*

###📦 Instalação

cd mobile

npm install

###▶️ Executar o projeto Mobile

npx expo start

*Isso abrirá o Expo Dev Tools no navegador.*

-Para rodar - 

No celular: escaneie o QR Code com o app Expo Go

No computador:
- Pressione:

- a → abrir no emulador Android

- i → abrir no simulador iOS (macOS)

- w → abrir no navegador (Web Expo)


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
