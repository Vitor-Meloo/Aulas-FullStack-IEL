use blog;
 
/*Selecinando todas as colunas da tabela de uma vez*/
SELECT * FROM posts;


/*Dando um apelido pro nome da minha coluna post_autor para Autor, e post autor bio*/
SELECT 
post_autor as Autor,
post_autor_bio as "Biografia do autor",
quantidade_seguidores FROM posts;

/*Ordenando tabelas com ORDER BY de forma crescente com ASC*/
SELECT * FROM posts ORDER BY quantidade_seguidores ASC;

/*Ordenando tabelas de forma decrescente*/
SELECT * FROM posts ORDER BY quantidade_seguidores DESC;