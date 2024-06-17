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

