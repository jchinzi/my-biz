var name = prompt("Welcome!  What should I call you?","friend");
var favFlavor = prompt("What's your favorite flavor?  The sky is the limit!", "rainbow sherbet");
var cupCone = prompt("Cup or Cone?", "cone");


var greeting = ('Hello ' + name + '!\nEnjoy a ' + cupCone + ' of ' + favFlavor + ' on your next visit!');

document.write(`<h3>${greeting}</h3>`);