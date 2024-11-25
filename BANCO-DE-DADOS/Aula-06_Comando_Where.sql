use blog; /*Em vez de usar use blog separado*/
/*SELECT * FROM  blog.posts; Eu posso indicar direto o nomedobanco.nomedatabela mas sempre tenho que ficar chamando ele na linha*/ 

SELECT * FROM posts WHERE quantidade_seguidores > 2000; /*Aqui eu seleciono apenas as linhas com quantidade de seguidores maior que 2000*/ 

