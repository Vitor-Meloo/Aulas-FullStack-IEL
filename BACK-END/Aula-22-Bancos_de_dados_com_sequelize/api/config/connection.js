const { Sequelize } = require("sequelize");

const connection = new Sequelize({
    dialect: 'mysql',
    database: "blog",
    host: "localhost",
    username: "root",
    password: "root",
    port: 3306
});

console.log(connection);

/*Aqui basicamente eu instalo as libs sequelize e mysql2 com o npm, e apos isso crio uma pasta chamada api
com o arquivo chamado connection.js que vai ser responsavel por ligar o banco a aplicação feito isso eu 
configuro a constante connection para que receba os dados do banco do mysql, e testo com o comando
node config/connection.js, caso não retorne nada, funcinou, caso retorne algum erro não funcionou*/