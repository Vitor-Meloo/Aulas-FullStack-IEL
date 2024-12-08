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

connection.define("Teste", {
    coluna_teste: 
});