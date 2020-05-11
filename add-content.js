//First attempt at greeting function

function personalGreeting(){
    var name = prompt("Welcome!  What should I call you?","friend");
    var favFlavor = prompt("What's your favorite flavor?  The sky is the limit!", "rainbow sherbet");
    var cupCone = prompt("Cup or Cone?", "cone");
    
    
    var greeting = ('Hello ' + name + '!\nEnjoy a ' + cupCone + ' of ' + favFlavor + ' on your next visit!');
    
    document.write(`<h3>${greeting}</h3>`);
}

//Revised attempt at greeting function

function altGreeting(){
    var greeting;

    var date=new Date();
    var time=date.getHours();

    if (time<12){
        greeting = "Good Morning!"
    } else if (time>12 && time<18){
        greeting = "Good Afternoon!"
    } else if (time>18){
        greeting = "Good Evening!"
    } else {
        greeting = "Welcome!"
    };

    var name = userName();
    var favFlavor = prompt("What's your favorite flavor?  The sky is the limit!", "rainbow sherbet");
    
    var finalGreeting = ('Hello ' + name + '!\nEnjoy some delicious ' + favFlavor + ' yogurt on your next visit!');

    document.write(`<h3>${finalGreeting}</h3>`);
}

//Attempt with loops

var howMany = function() {
    var count = prompt('How many scoops would you like today?');

    while(count === `` || isNaN(count) ) {
        count = prompt('Please enter a number.  How many scoops would you like today?');
    }

    return Number(count);
}

var getItem = function() {
    var order = prompt('Do you prefer a cup or cone?');
    var yum;

    while(order !== 'cup' && order !== 'cone') {
        order = prompt('Please enter "cup" or "cone"...');
    }

    if (order === 'cup') {
        yum = '<img src="Images/sml icecream_cup_line-03 (1).png">';
    } else if (order === 'cone') {
        yum = '<img src="Images/sml ice-icon-1653.png">';
    }
    return yum;
}

var userName = function() {
    var name = prompt('What can I call you?');

    while(name === '' || name === null) {
        name = prompt('I need to call you something, friend.  A nickname is just fine if you like.');
    }

    return String(name);
}

var showOrder = function() {
    // var name = userName();
    var yum = getItem();
    var total = howMany();
    var result = '';

    for(var i = 0; i < total; i++) {
        result = result + yum;
    }
    return result;
}