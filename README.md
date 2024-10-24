
# Node Express PoC

Esta é uma Prova de Conceito (PoC) para um servidor básico usando Express e MySQL. O objetivo deste projeto é demonstrar a configuração inicial de um servidor Express, a conexão com um banco de dados MySQL e a implementação de rotas simples para manipulação de dados.

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- mysql2 (driver MySQL para Node.js)

## Estrutura do Projeto` 

node-express-poc/ 

├── package.json 

├── package-lock.json 

├── server.js 

└── database.sql

 ## Pré-requisitos

- Node.js (v14 ou superior)
- MySQL Server

## Instalação

1. Clone o repositório:

		git clone https://github.com/Matheus-Freitas0/node-express-poc.git
		cd node-express-poc` 

2.  Instale as dependências:

    `npm install` 
    
3.  Crie o banco de dados e a tabela. Você pode usar o arquivo `database.sql` para isso:

	    -- database.sql
	    CREATE DATABASE IF NOT EXISTS express_poc;
    
	    USE express_poc;
    
	    CREATE TABLE IF NOT EXISTS items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
	    );
    
    Execute o script no seu cliente MySQL ou via terminal.
    
4.  Configure as credenciais do banco de dados no arquivo `server.js`:

    `const db = mysql.createConnection({
        host: 'localhost',
        user: 'seu_usuario', // substitua pelo seu usuário do MySQL
        password: 'sua_senha', // substitua pela sua senha do MySQL
        database: 'express_poc'
    });` 
    

## Executando o Servidor

Para iniciar o servidor, use o seguinte comando:

`node server.js` 

O servidor estará rodando em `http://localhost:3000`.

## Rotas Disponíveis

-   **GET /**: Retorna uma mensagem de boas-vindas.
-   **GET /items**: Retorna todos os itens armazenados no banco de dados.
-   **POST /items**: Cria um novo item. Envie um JSON no corpo da requisição com a seguinte estrutura:

`{
  "name": "Item Name"
}` 

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou relatar problemas. Para contribuir, siga os seguintes passos:

1.  Fork este repositório.
2.  Crie uma nova branch (`git checkout -b feature/nome-da-sua-feature`).
3.  Faça suas alterações e commite (`git commit -m 'Adiciona nova feature'`).
4.  Envie para o repositório remoto (`git push origin feature/nome-da-sua-feature`).
5.  Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT 
