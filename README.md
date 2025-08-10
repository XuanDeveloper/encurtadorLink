# 🔗 Encurtador de URLs

Um projeto de estudo rápido que implementa um encurtador de URLs com backend em Node.js/Express e frontend em Angular.

## 📋 Descrição

Este projeto permite que os usuários encurtem URLs longas em links mais curtos e gerenciáveis. O sistema consiste em:

- **Backend**: API REST em Node.js com Express e MongoDB
- **Frontend**: Interface web em Angular com design responsivo
- **Funcionalidades**: Encurtamento de URLs, redirecionamento e cópia para área de transferência

## 🏗️ Arquitetura

```
encurtadorLink/
├── backend/                 # API Node.js/Express
│   ├── server.js           # Servidor principal
│   ├── package.json        # Dependências do backend
│   └── .env               # Variáveis de ambiente
└── frontend/
    └── encurtador-frontend/ # Aplicação Angular
        ├── src/
        │   └── app/
        │       └── home/   # Componente principal
        └── package.json    # Dependências do frontend
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- MongoDB (local ou Atlas)
- Angular CLI (`npm install -g @angular/cli`)

### 1. Configuração do Backend

```bash
# Navegar para o diretório do backend
cd backend

# Instalar dependências
npm install

# Criar arquivo .env com as configurações
echo "MONGO_URL=sua_url_do_mongodb" > .env
echo "PORT=3000" >> .env

# Iniciar o servidor
npm start
```

### 2. Configuração do Frontend

```bash
# Navegar para o diretório do frontend
cd frontend/encurtador-frontend

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm start
```

### 3. Acessar a Aplicação

- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:3000

## 🔧 Configuração do MongoDB

### Opção 1: MongoDB Local
1. Instale o MongoDB em sua máquina
2. Configure a URL: `MONGO_URL=mongodb://localhost:27017/encurtador`

### Opção 2: MongoDB Atlas
1. Crie uma conta no MongoDB Atlas
2. Configure a URL: `MONGO_URL=mongodb+srv://usuario:senha@cluster.mongodb.net/encurtador`

## 📡 Endpoints da API

### POST `/api/shorten`
Encurta uma URL original.

**Request:**
```json
{
  "originalUrl": "https://exemplo.com/url-muito-longa"
}
```

**Response:**
```json
{
  "originalUrl": "https://exemplo.com/url-muito-longa",
  "shortUrl": "abc123"
}
```

### GET `/api/:shortUrl`
Redireciona para a URL original usando o código encurtado.

## 🎨 Funcionalidades do Frontend

- **Interface intuitiva**: Campo de entrada para URLs
- **Validação**: Verifica se a URL é válida antes de processar
- **Feedback visual**: Indicadores de carregamento e mensagens de erro
- **Ações rápidas**: Botões para abrir e copiar URLs encurtadas
- **Design responsivo**: Funciona em desktop e mobile

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js**: Runtime JavaScript
- **Express**: Framework web
- **MongoDB**: Banco de dados NoSQL
- **Mongoose**: ODM para MongoDB
- **ShortID**: Geração de IDs únicos
- **CORS**: Cross-origin resource sharing
- **Dotenv**: Gerenciamento de variáveis de ambiente

### Frontend
- **Angular 19**: Framework frontend
- **TypeScript**: Linguagem de programação
- **SCSS**: Pré-processador CSS
- **Angular Forms**: Gerenciamento de formulários

## 📝 Estrutura do Banco de Dados

### Collection: `urls`
```javascript
{
  originalUrl: String,    // URL original
  shortUrl: String        // Código encurtado (único)
}
```

## 🔍 Como Funciona

1. **Encurtamento**: O usuário insere uma URL longa no frontend
2. **Processamento**: O backend gera um código único usando ShortID
3. **Armazenamento**: A URL original e o código são salvos no MongoDB
4. **Retorno**: O frontend exibe a URL encurtada completa
5. **Redirecionamento**: Quando acessada, a URL encurtada redireciona para a original

## 🐛 Solução de Problemas

### Erro de Conexão com MongoDB
- Verifique se o MongoDB está rodando
- Confirme se a URL de conexão está correta no `.env`

### Erro de CORS
- O backend já está configurado com CORS habilitado
- Verifique se as portas estão corretas (3000 para backend, 4200 para frontend)

### Frontend não carrega
- Execute `npm install` no diretório do frontend
- Verifique se o Angular CLI está instalado globalmente

## 📚 Próximos Passos

Este é um projeto de estudo, mas pode ser expandido com:

- Autenticação de usuários
- Estatísticas de cliques
- URLs personalizadas
- Expiração de links
- Interface administrativa
- Rate limiting
- Validação mais robusta de URLs

## 📄 Licença

Este projeto é para fins educacionais.
