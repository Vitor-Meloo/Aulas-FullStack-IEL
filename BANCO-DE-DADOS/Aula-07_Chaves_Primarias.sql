use blog;

select * from posts;

/*Aqui eu consigo adicionar colunas na tabela direto, e dizer que ela será a primeira coluna com o first*/
ALTER TABLE posts ADD COLUMN id INT NOT NULL PRIMARY KEY AUTO_INCREMENT FIRST;


CREATE TABLE posts2 (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, /*Identificador de chave primaria*/
	title VARCHAR(255) NOT NULL, 
    content text
);

DESCRIBE posts2;


INSERT INTO posts2 (title, content) values ("post JS", "Conteudo do post JS");
