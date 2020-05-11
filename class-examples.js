

//Example 'logical or' function from class
var howMany = function() {
    var count = prompt('How many do you want to order?');

    while(count === `` || isNaN(count) ) {
        count = prompt('Please enter a number.  How many do you want?');
    }

    return Number(count);
}

//Example 'logical and' function from class

var getItem = function() {
    var order = prompt('What would you like to order?');
    var item;

    while(order !== 'house' && order !== 'hotel') {
        order = prompt('Please enter "house" or "hotel"...');
    }
    if (order === 'hotel') {
        item = '<img src="images/hotel.png">';
    } else if (order === 'house') {
        item = '<img src="images/house.png">';
    }
    return item;
}

//Example 'for loop' from class

var showOrder = function() {
    var item = getItem();
    var total = howMany();
    var result = '';

    for (var i = 0; i < total; i++) {
        result = result + '<p>' + 'Model #' + i + ' ' + item + '</p>';
    }
    
    return result;
}