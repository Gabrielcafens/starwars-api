# Star Wars Films API

Este projeto é uma API simples para manipular informações sobre os filmes de Star Wars. Foi desenvolvida utilizando Node.js com Express, MongoDB e Mongoose, com o objetivo de estudo. A API permite realizar operações básicas de CRUD (Create, Read, Update, Delete) para gerenciar dados dos filmes.


## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de aplicações web e APIs.
- **MongoDB**: Banco de dados NoSQL orientado a documentos.
- **Mongoose**: Biblioteca ODM (Object Data Modeling) para MongoDB e Node.js.

## Funcionalidades

A API permite realizar as seguintes operações:

- **GET**: Obter a lista de todos os filmes.
- **POST**: Adicionar um novo filme.
- **PUT**: Atualizar informações de um filme existente.
- **DELETE**: Remover um filme.

## Como usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Gabrielcafens/starwars-api.git
   ```
**Instale as dependências:**

 ```bash
   npm install
```

**Execute o app:***

 ```bash
   npm start
```

**Configuração:**

Para conectar-se ao MongoDB, você precisa fornecer uma string de conexão válida. Este projeto utiliza o MongoDB Atlas para hospedagem do banco de dados.

No arquivo index.js, substitua a string de conexão pelo seu próprio URI do MongoDB:

 ```bash
   mongoose.connect('mongodb+srv://seu-usuario:sua-senha@seu-cluster.mongodb.net/nome-do-banco?retryWrites=true&w=majority')

```
A aplicação estará disponível em http://localhost:3030.


## Endpoints

Endpoints
Obter todos os filmes
GET /

Retorna uma lista de todos os filmes.


Atualizar um filme
PUT /

Atualiza as informações de um filme existente pelo seu ID.

Remover um filme
DELETE /

Remove um filme pelo seu ID.

Adicionar um novo filme
POST /
Adiciona um novo filme. O corpo da requisição deve conter:


 ```bash
   {
  "title": "string",
  "description": "string",
  "image_url": "string",
  "trailer_url": "string"
}

```

## Observações

- Este projeto está em constante desenvolvimento e novas funcionalidades serão adicionadas futuramente.

```                         ___

                          ___
                      .-'   `'.
                     /         \
                     |         ;
                     |         |           ___.--,
            _.._     |0) = (0) |    _.---'`__.-( (_.
     __.--'`_.. '.__.\    '--. \_.-' ,.--'`     `""`
    ( ,.--'`   ',__ /./;   ;, '.__.'`    __
    _`) )  .---.__.' / |   |\   \__..--""  """--.,_
   `---' .'.''-._.-'`_./  /\ '.  \ _.--''````'''--._`-.__.'
         | |  .' _.-' |  |  \  \  '.               `----`
          \ \/ .'     \  \   '. '-._)
           \/ /        \  \    `=.__`'-.
           / /\         `) )    / / `"".`\
     , _.-'.'\ \        / /    ( (     / /
      `--'`   ) )    .-'.'      '.'.  | (
             (/`    ( (`          ) )  '-;    
            
  ( (                ( (                 ( (                
   ) )                ) )                 ) )               
.........           .........         .........           
|       |]         |       |]         |       |]                
\       /           \       /         \       /              
 `-----'             `-----'           `-----'  
