use blog;

CREATE TABLE posts2 (
id INT,
title VARCHAR (45),
content TEXT (45) 
);

INSERT INTO posts2 (id, title, content)
values 
(1, "post 1", "Conteudo do post 1"),
(2, "post 2", "Conteudo do post 2"),
(3, "post 3", "Conteudo do post 3"),
(4, "post 4", "Conteudo do post 4"),
(5, "post 5", "Conteudo do post 5"),
(6, "post 6", "Conteudo do post 6");

DELETE FROM posts2; /*Deleta tudo na tabela*/

DELETE FROM posts2 WHERE id = 1; /*Vai deletar apenas a linha que eu quero*/







