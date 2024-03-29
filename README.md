# :dart: Projeto Blogs API
Projeto desenvolvido no módulo 24, durante o módulo de back-end no curso de desenvolvimento web da Trybe.


## :brain: Habilidades

Construir um back-end usando ORM com o pacote sequelize do npm:

- Criar e associar tabelas usando models do sequelize
- Construir endpoints para consumir os models que criar
- Fazer um CRUD com o ORM


## :wrench: O que foi desenvolvido

Uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.

Para fazer um post é necessário usuário e login, portanto será trabalhada a relação entre user e post. Também será necessário a utilização de categorias para seus posts, assim trabalhando a relação de posts para categorias e de categorias para posts.


## :dart: Instruções para visualizar o projeto:

Realizar o git clone;

  - Realizar o `npm install`;
  - Criar arquivo `.env` na raiz do projeto;
  - Setar as variavéis de ambiente no arquivo `.env`:
 ```
    HOSTNAME=nome do host
    MYSQL_USER=nome do usuário
    MYSQL_PASSWORD=password
 ```

Documentação da API: 
