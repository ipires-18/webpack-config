# O que é o webpack ?

- O webpack é um module bundler (empacotador de módulos) que recebe entradas (entry/entries) que 
são arquivos de dependências dos projetos, ele transformar isso em uma saída (output), que condensa 
as dependencias.

- Podemos utilizar em outros tipos de arquivos como: CSS, imagens, fontes, é possível também criar
configuraçãoes diferente para ambientes de desenvolvimento e produção.

# Porque utilizar o webpack ?

- Reduzir a complexidade de importação das dependências, a propria importação de dependências (commonJS), 
pois os navegadores não possuem compatibilidade com esse recurso.

- Coleta automática de dependências, baseada o que foi importado e exportado (dependency graph) e possibilidade
de utilizar outros tipos de arquivos, não só JS e carrega apenas o que é utilizado, redução de carregamento de 
arquivos.

# Webpack e SPA

- As SPAs (Single Page Applications) vem dominando as arquiteturas de projetos web.
- Normalmente é utilizado muito JS para atingir resultados interressantes com frameworks e libs.
- Acaba que o webpack ajuda a organizar todo esse código JS e também otimiza a velocidade de carregamento destas páginas.

# Conceitos do webpack

## Entrada e Saída

- Estes são os conceitos mais importantes do webpack, que determinam seu funcionamento.
- Entry ou entry point é o ponto inicial, onde as dependências do projeto são decladaras
para o webpack, geralmente o arquivo index.js.
- Output é a saída do empacotamento do webpack, por default fica na pasta dist e o arquivo 
é o main.js.
- Todos estes padrões podem ser alterados em webpack.config.js.

## Loaders

- Loader é o recurso que permite o webpack processar diversos tipos de arquivos, além de Javascript.
- A cada tipo de arquivo novo que vai ser processado no projeto, precisamos configurar no webpack.config.js.
- Duas propriedades precisam ser definidas:test, para o tipo de arquivo, e use para o loader a ser utilizado.
- Loaders precisam ser instalados.

## Plugins 

- Plugins são funcionamentes que podem ser adicionadas ao nosso projeto.
- como por exemplo: minificar o JS para deixar o carregamento mais rápido.
- Precisamos instalar e inicializar cada um dos plugins, eles devem ser adicionados
no arquivo webpack.config.js.

## Mode 

- Mode ou modo é a forma que o webpack vai rodar no projeto que está sendo executado.
- Podemos separar como o development, production ou none.
- Criando configurações isoladas para cada um deles.
- Definimos o modo do projeto também no arquivo webpack.config.js.

## Compatibilidade

- O webpack roda em cima do Node.js 10.13+.
- o navegador precisa suportar pelo menos todos os recursos de ES5, versão do javascript.
- Há maneiras de rodar o webpack em navegadores mais antigos, utilizando polyfills.