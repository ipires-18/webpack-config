import Tabela from '../img/tabela.png';

class Image {
  insertImage() {
    const img = document.createElement('img');

    img.src = Tabela;
    img.width = 200;

    document.querySelector('body').appendChild(img);
  }
}

export default Image;
