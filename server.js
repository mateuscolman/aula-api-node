const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniiando o App
const app = express();

//Permitir que o App envie dados no formato JSON
app.use(express.json());

//torna o acesso da api pública
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');

//importando rotas
app.use('/api', require('./src/routes'));

//Passando porta de comunicação
app.listen(3004); 