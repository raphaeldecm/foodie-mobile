# Foodie

Foodie é um aplicativo de delivery de comidas desenvolvido com React Native e Expo. Este aplicativo permite aos usuários navegar por vários restaurantes e fazer pedidos de comida com facilidade.

## Requisitos

- [Node.js](https://nodejs.org/) (v12 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (v4 ou superior)
- [Yarn](https://yarnpkg.com/) (opcional, mas recomendado)

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/foodie.git
   cd foodie
   ```

2. Inicie o projeto:
  
  ```sh
  npm install
  # ou
  yarn install
  ```

3. Inicie o projeto Expo:

  ```sh
  expo start
  ```

Estrutura do Projeto:

foodie/
├── src/
|   ├── assets/                 # Arquivos de mídia (imagens, ícones, etc.)
|   ├── components/             # Componentes reutilizáveis
│   |   ├── header/
│   |   │   ├── header.jsx
│   |   │   ├── header.style.js
│   |   ├── inputForm/
│   |   │   ├── inputForm.jsx
│   |   │   ├── inputForm.style.js
│   |   ├── button/
│   |   │   ├── button.jsx
│   |   │   ├── buttonstyle.js
|   ├── constants/              # Constantes (cores, estilos globais, etc.)
│   |   ├── icons.js
│   |   ├── theme.js
|   ├── screens/                # Telas do aplicativo
|   │   ├── createUser/
│   |   │   ├── createUser.jsx
│   │   |   ├── createUser.style.js
|   │   ├── login/
│   |   │   ├── login.jsx
│   │   |   ├── login.style.js
├── App.js                  # Arquivo principal do aplicativo
├── app.json                # Configurações do Expo
├── package.json            # Dependências e scripts do projeto
├── README.md               # Documentação do projeto
