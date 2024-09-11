var squareSize = document.querySelector('.squareSize');

var button = document.querySelector('.button');

var result = document.querySelector('.result');

var text = document.querySelector('.text');
var textTwo = document.querySelector('.textTwo');
var textThree = document.querySelector('.textThree');
var main = document.querySelector('.main');
var template = document.querySelector('#template-main');

/*
var play = function () {
  return Math.round(Math.random() * 100);
}
var number = play();
console.log(number);
*/
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
  /*
 var oneNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
*/

  /*
 var number = Math.round(Math.random() * 100);
    console.log(number);
  var oneNumber = function () {

  
    return function () {
while (text.value !== number) {
  
  
  if (text.value < number) {
return 'Введите число побольше';
  } else {
return 'Введите число поменьше';
  }
  
  
  if (number === text.value) {
return 'Вы угадали!';
  }
           
  }
    }
};
  
 var item = template.content.cloneNode(true);
  item.querySelector('.result').textContent = oneNumber()();
main.append(item);

*/
text.value = '';
           


});