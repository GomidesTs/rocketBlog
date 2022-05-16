# RocketBlog

![Banner](https://github.com/GomidesTs/rocketBlog/blob/main/banner.png?raw=true)

Tabelas de conteúdo 
=================
<!--ts-->
   * [Sobre](#about)
   * [Features](#features)
   * [Pre Requisitos](#prerequisites)
        * [Instalação](#installation)
   * [Tecnologias](#tecnologias)
<!--te-->

<div id='about' />

## Descrição do Projeto
O RocketBlog Foi desenvolvido para dar uma push nas habilidades de desenvolvimento no Desafio Marmitech, onde a partir de uma página estática de blog foi criado uma aplicação frontend em react para ser possível a aplicação de novas features que não estavam no projeto original.

Desenvolvido um artigo no LinkedIn para mostrar aquilo que aprendi ao realizar o projeto e vídeos dele em funcionamento disponivel: https://www.linkedin.com/pulse/rocketblog-tulio-gomides/?trackingId=o5DiThpWQtKRasayOWstJg%3D%3D

![Badge](https://img.shields.io/badge/Marmitech-RocketBlog-%237159c1?style=for-the-badge&logo=ghost)

<div id='features' />

### Features
- [x] Renderização dinâmica dos posts
- [x] Pesquisas por posts por palavras chaves
- [ ] Cadastro de usuário
- [ ] Login
- [ ] Cadastro de posts
- [ ] Comentários
- [ ] Contagem de visualização
- [ ] Sistema de estrelas

Blog é um site informativo, onde os conteúdos são apresentados em ordem cronológica inversa, ou seja, com destaque para as publicações mais recentes, muitas vezes chamadas blog posts.

Podendo dar destaques aos posts de N maneiras para ser dinâmico o blog desenvolvido aqui separa os posts por data mais visualizados e mais votados.

Com as features desenvolvidas é possível a ordenação automática dos posts além de possibilitar renderizar os conteúdos do posts clicando em qualquer um deles.

Estas aplicações foram possíveis utilizado a aplicação [json-server](https://www.npmjs.com/package/json-server) onde foi trabalhado os conhecimentos de API REST, para renderização do post específicos foi incorporado as rotas o id como mostrado na documentação.

```js
<Route path="/post/:idPost" element={<Post />} />
```
Aplicamos vários filtros para nos retornar os posts  que são possíveis ser enviados pela própria url do navegador diminuindo assim o tempo de resposta da aplicação.
```js
useEffect(() => {

        api.get('/posts?star=1&_limit=1&_order=desc')
        .then((response)=>{
            setHero(response.data);
        })

        api.get('/posts?star=5&_limit=2&_order=desc')
        .then((response)=>{
            setMain(response.data);
        })

        api.get('/posts?_sort=date&_order=desc&_limit=1')
        .then((response)=>{
            setBanner(response.data);
        })

        api.get('/posts?_sort=date&_order=desc&_limit=3')
        .then((response)=>{
            setMostseen(response.data);
        })
    }, [])
```
Trabalhando com esta aplicação pude estudar os variavies motetos HTTPS bem como a resposta que cada um me retorna ao aplicar acoes variadas.

<div id='prerequisites' />

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<div id='installation' />

### Rodando a aplicação Front end

```bash
# Clone este repositório
$ git clone <https://github.com/GomidesTs/rocketBlog.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd rocketBlog

# Instale as dependências
$ npm install

# Execute a aplicação
$ yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### Rodando o servidor para ser renderizado na aplicação

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd rocketBlog

# Execute a aplicação
$ json-server --watch db.json --port 4000

# O servidor inciará na porta:4000 - acesse <http://localhost:4000>
```

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [SASS](https://sass-lang.com/)