# Bem-vindo ao repositório de frontend do projeto realizado para o teste da Ik Solution!

Este repositório é destinado ao desenvolvimento da aplicação solicitada para avaliação da Ik Solution.

Este é um projeto fullstack, onde há a integração de ambos, tanto backend quanto frontend.

No frontend as principais tecnologias utilizadas são:
 - React.Js
 - Axios
 - Chakra UI

Foi utilizado o React Router Dom para as rotas

## Como rodar o projeto localmente:

Atenção para essa parte!

Primeiramente, você deve fazer o clone do repositório na sua máquina local. Para isso, recomendo utilizar a chave SSH e utilizar o comando `git clone :chave:`.

Assim que terminar a instalação você pode utilizar o comando `cd frontend/my_app` e em seguida rodar o comando `npm install` para instalar as dependências do projeto.

Rodar o comando npm install fará com que as dependências sejam instaladas na sua máquina local (uma vez que o arquivo node_modules é ignorado pelo .gitignore).

Importante:

Após seguir esses passos, você poderá rodar o projeto utilizando o comando `npm start` dentro da pasta /frontend/my_app.

E pronto! O projeto já deve estar rodando!

## Rotas

O projeto possuí, por enquanto, apenas uma rota `/`, que é uma tela que exibe os compromissos agendados e um formulário para adicionar um novo compromisso.

## API

O endpoint utilizado é a API que está rodando em `https://protected-bastion-57133.herokuapp.com/`, porém, é necessário utilizar a rota que é expressa na api, ou seja, para o método GET é utilizado `https://protected-bastion-57133.herokuapp.com/all` e para o método POST é utilizado `https://protected-bastion-57133.herokuapp.com/add`.

Neste projeto é utilizada a biblioteca Axios para fazer as requisições para a API, conforme você poderá notar na pasta `frontend/my_app/src/services`.


### Pronto! Agora é só desfrutar do projeto.

P.s.: Estou tendo dificuldades com o deploy do frontend e ainda não consegui achar uma solução. Por este motivo, o projeto somente roda localmente seguindo os passos mencionados na seção *Como rodas o projeto localmente*.  
