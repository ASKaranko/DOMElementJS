'use strict';

function DomElement (selector) {
  this.selector = selector;
  this.height = 200;
  this.width = 300;
  this.bg = 'yellow';
  this.fontSize = 30;
  DomElement.prototype.createElem = function () {
    if (this.selector[0] === '.') {
      let div = document.createElement('div');
      document.body.append(div);
      div.classList.add(`${this.selector.substring(1)}`);
      div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
      div.textContent = 'Это созданный с помощью объекта класса DomElement элемент div';
    } else if (this.selector[0] === '#') {
      let p = document.createElement('p');
      document.body.append(p);
      p.setAttribute('id', `${this.selector.substring(1)}`);
      p.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`;
      p.textContent = 'Это созданный с помощью объекта класса DomElement элемент p';
    }
  }; 
}

let objElement = new DomElement ('#element');

console.log(objElement);
console.log(objElement instanceof DomElement);

objElement.createElem();