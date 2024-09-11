var squareSize = document.querySelector('.squareSize');

var button = document.querySelector('.button');

var result = document.querySelector('.result');

var text = document.querySelector('.text');
var textTwo = document.querySelector('.textTwo');
var textThree = document.querySelector('.textThree');
var main = document.querySelector('.main');
var template = document.querySelector('#template-main');


var number = Math.round(Math.random() * 100);
console.log(number);

squareSize.addEventListener('submit', function (evt) {
  evt.preventDefault();
 
  
   if (text.value == number) {
main.innerHTML = 'Вы угадали!';
   } else if (text.value > number) {
main.innerHTML = 'Введите число поменьше';
  } else {
  main.innerHTML = 'Введите число побольше';
  }
text.value = '';
           
});
