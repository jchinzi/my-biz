function personalGreeting(){
    var name = prompt("Welcome!  What should I call you?","friend");
    var favFlavor = prompt("What's your favorite flavor?  The sky is the limit!", "rainbow sherbet");
    var cupCone = prompt("Cup or Cone?", "cone");
    
    
    var greeting = ('Hello ' + name + '!\nEnjoy a ' + cupCone + ' of ' + favFlavor + ' on your next visit!');
    
    document.write(`<h3>${greeting}</h3>`);
}

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

    var name = prompt(greeting + " What should I call you?", "friend")
    var favFlavor = prompt("What's your favorite flavor?  The sky is the limit!", "rainbow sherbet");
    var cupCone = prompt("Cup or Cone?", "cone");
    
    var finalGreeting = ('Hello ' + name + '!\nEnjoy a ' + cupCone + ' of ' + favFlavor + ' on your next visit!');

    document.write(`<h3>${finalGreeting}</h3>`);
}