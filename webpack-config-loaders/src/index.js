import Title from './components/title';
import Tabela from './components/image';
import Button from './components/button';
import Warning from './templates/warning.html';
import fraseTxt from './files/frase.txt';
import descricaoJson from './files/descricao.json';

import './styles/warning.css';

const title = new Title();

const tabela = new Tabela();

const button = new Button();

title.create('Primeira página');

tabela.insertImage();

button.create();

const body = document.querySelector('body');
body.innerHTML += Warning;

const frase = fraseTxt;

console.log(frase);

console.log(frase.toUpperCase());

const descricao = descricaoJson;

console.log(descricao);
