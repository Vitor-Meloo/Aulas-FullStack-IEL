use blog; /*Criando o banco de dados*/

/*Criando a tabela dentro do banco de dados*/
CREATE TABLE posts (
post_titulo VARCHAR (45),
post_data DATE, 
post_conteudo TEXT, 
post_autor VARCHAR (45),
post_autor_foto_perfil VARCHAR(45),
post_autor_bio VARCHAR (255),
quantidade_seguidores INT, 
quantidade_comentarios INT
);

/*Insetindo os dados em algumas colunas da tabela*/
INSERT INTO posts (post_titulo, post_conteudo, post_autor) 
values ("Titulo do post", "Conteudo do post", "Vitor Melo");
