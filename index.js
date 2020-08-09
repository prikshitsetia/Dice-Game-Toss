// Image 1 change

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var a = 'images/dice' + randomNumber1 + '.png';
console.log(a);
document.querySelector('.img1').setAttribute('src', a);

// Image 2 Change

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var b = 'images/dice' + randomNumber2 + '.png';
console.log(b);
document.querySelector('.img2').setAttribute('src', b);

// Winner
var h = document.querySelector('h1');
if (randomNumber1 > randomNumber2) {
  h.innerHTML = '🚩Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
  h.innerHTML = 'player 2 Wins!🚩';
} else {
  h.innerHTML = 'Draw';
}