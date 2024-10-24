// server.js
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Middleware para analisar JSON
app.use(express.json());

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario', // substitua pelo seu usuário do MySQL
    password: 'sua_senha', // substitua pela sua senha do MySQL
    database: 'express_poc'
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
        return;
    }
    console.log('Conectado ao banco de dados MySQL.');
});

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Rota para obter todos os itens
app.get('/items', (req, res) => {
    db.query('SELECT * FROM items', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Rota para criar um novo item
app.post('/items', (req, res) => {
    const { name } = req.body;
    db.query('INSERT INTO items (name) VALUES (?)', [name], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, name });
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
