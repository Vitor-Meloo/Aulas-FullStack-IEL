use blog; 

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

/*Inserindo dados nas colunas */

INSERT INTO posts (post_titulo, post_conteudo, post_autor) 
values ("Titulo do post", "Conteudo do post", "Vitor Melo");

INSERT INTO posts(
post_titulo,
post_data, 
post_conteudo,
post_autor,
post_autor_foto_perfil,
post_autor_bio,
quantidade_seguidores,
quantidade_comentarios)
values ("Novidades da Semana", "2024/07/01", "Post Incrivel", "Maria Silva", "foto_maria.jpg", "Adora Livros", 1200, 45);


/*Inserindo varias linhas de uma vez na tabela*/
INSERT INTO posts(
post_titulo,
post_data, 
post_conteudo,
post_autor,
post_autor_foto_perfil,
post_autor_bio,
quantidade_seguidores,
quantidade_comentarios)
values 	("Dicas de produtividade", "2024/07/02", "Trabalho e Foco", "João Pereira", "foto_joao.jpg", "Coach", 980, 33),
		("Receitas Faceis e Rapidas", "2024/07/03", "Cozinha Na Prática", "Ana Costa", "foto_ana.jpg", "Chef de Cozinha", 1500, 60);



