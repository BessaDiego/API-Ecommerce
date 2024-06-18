# Projeto de E-commerce - Curso de Análise e Desenvolvimento de Sistemas

## Descrição do Projeto

Este projeto foi desenvolvido como parte do curso de Análise e Desenvolvimento de Sistemas, com o objetivo de criar uma API simples para um sistema de e-commerce utilizando Node.js. O projeto faz uso das tecnologias Express, Sequelize, dotenv e MySQL2 para gerenciar categorias e produtos, com a associação entre elas através de chaves estrangeiras.

### Tecnologias Utilizadas

-   **Node.js**: Plataforma de desenvolvimento para construir a API.
-   **Express**: Framework para gerenciar as rotas e middleware da aplicação.
-   **Sequelize**: ORM (Object-Relational Mapping) para interagir com o banco de dados.
-   **dotenv**: Gerenciamento de variáveis de ambiente.
-   **MySQL2**: Banco de dados relacional utilizado para armazenar as informações de categorias e produtos.

### Funcionalidades da API

A API de e-commerce desenvolvida possui as seguintes funcionalidades:

-   **Categorias**:
    -   Criar, listar, atualizar e deletar categorias.
    -   Cada categoria possui um nome e uma descrição.
-   **Produtos**:
    -   Criar, listar, atualizar e deletar produtos.
    -   Cada produto possui um nome, descrição, preço e uma chave estrangeira para identificar a categoria à qual pertence.

### Estrutura do Banco de Dados

#### Tabela de Categorias

-   **id**: Identificador único da categoria (chave primária).
-   **name**: Nome da categoria (não nulo).
-   **description**: Descrição da categoria (opcional).

#### Tabela de Produtos

-   **id**: Identificador único do produto (chave primária).
-   **name**: Nome do produto (não nulo).
-   **description**: Descrição do produto (opcional).
-   **price**: Preço do produto (não nulo).
-   **categoryId**: Identificador da categoria à qual o produto pertence (chave estrangeira referenciando a tabela de categorias).

### Endpoints da API

#### Categorias

-   `GET /api/categories`: Lista todas as categorias.
-   `GET /api/categories/:id`: Obtém uma categoria pelo seu ID.
-   `POST /api/categories`: Cria uma nova categoria.
-   `PUT /api/categories/:id`: Atualiza uma categoria existente.
-   `DELETE /api/categories/:id`: Deleta uma categoria.

#### Produtos

-   `GET /api/products`: Lista todos os produtos.
-   `GET /api/products/:id`: Obtém um produto pelo seu ID.
-   `POST /api/products`: Cria um novo produto.
-   `PUT /api/products/:id`: Atualiza um produto existente.
-   `DELETE /api/products/:id`: Deleta um produto.

### Conclusão

Este projeto demonstra a criação de uma API básica para um sistema de e-commerce, permitindo a gestão de categorias e produtos de maneira eficiente. Através deste projeto, foi possível aplicar conceitos importantes de desenvolvimento de software, como a utilização de um ORM para interação com o banco de dados, a configuração de variáveis de ambiente, e a implementação de um sistema de rotas utilizando Express.