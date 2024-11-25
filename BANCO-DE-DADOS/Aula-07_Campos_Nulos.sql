use blog; 

/*Aqui temos a criação da tabela 1
CREATE TABLE users (
	email VARCHAR (45),
    username VARCHAR(45)
);

INSERT INTO users (email, username)
VALUES 
("user1@gmail.com", "username1"),
("user2@gmail.com", "username2");*/

CREATE TABLE users2 (
	email VARCHAR (45) NOT NULL,
    username VARCHAR(45)
    );
    
INSERT INTO users2 (email, username) VALUES (NULL,NULL); /*Aqui vai dar erro, pois o email não pode ser nulo, mas é possível passar uma string vazia "" */



DESCRIBE users;