import Title from './components/title';
import Tabela from './components/image';
import Button from './components/button';

const title = new Title();

const tabela = new Tabela();

const button = new Button();

title.create('Primeira página');

tabela.insertImage();

button.create();
