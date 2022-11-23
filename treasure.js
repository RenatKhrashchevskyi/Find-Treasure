// //Getting random values as the map has 400px*400px

// let getRandomNumber = function(size) {
//     return Math.floor(Math.random() * size);
// };
// console.log(getRandomNumber(400));


// //Setting the coordinates of the treasure
// let width = 400;
// let heigth = 400;

// let target = {
//     x: getRandomNumber(width),
//     y: getRandomNumber(heigth)
// };

// //Click Handler
// $('#map').click(function (event){

// });

// //click counter
// let clicks = 0;


// //Calculating the distance from the click to the treasure
// let getDistance = function (event, target) {
//     let diffX = event.offsetX - target.x;
//     let diffY = event.offsetY - target.y;
//     return Math.sqrt((diffX * diffX) (diffY * diffY));
// };


// //inform the player how close he is to the goal
// let getDistanceHint = function (distance) {
//     if (distance < 10) {
//         return 'You`ll burn!'
//     } else if (distance < 20) {
//         return 'Very hot!';
//     } else if (distance < 40) {
//         return 'Hot!';
//     } else if (distance < 80) {
//         return 'Warm';
//     } else if (distance < 160) {
//         return 'Cold!';
//     } else if (distance < 320) {
//         return 'Very cold!';
//     } else {
//         return 'You`ll freeze!';
//     }
// };

// let distance = getDistance(event, target);
//     let distanceHint = getDistanceHint(distance);
//     $('#distance').text(distanceHint);
//     if (distance < 8) {
//         alert('The treasure is found! Made clicks: ' + clicks);
//     }



/*Add all together
==============
*/

//Getting random values as the map has 400px*400px

let getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};

//Calculating the distance from the click to the treasure
let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

//inform the player how close he is to the goal
let getDistanceHint = function (distance) {
     if (distance < 30) {
        return 'You`ll burn!'
    } else if (distance < 50) {
        return 'Very hot!';
    } else if (distance < 80) {
        return 'Hot!';
    } else if (distance < 160) {
        return 'Warm';
    } else if (distance < 320) {
        return 'Cold!';
    } else if (distance < 400) {
        return 'Very cold!';
    } else if (distance < 480) {       //// add more hints
        return 'Very cold-cold';
    } else if (distance < 560) {
        return 'Very much cold-colder';
    } else if (distance < 640) {
        return 'Super much cold-colder';
    } else if (distance < 720) {
        return 'You`ll freeze!';
  
    } else {
        return 'You are dead!';
    }
};

let width = 800;
let heigth = 800;
let clicks = 0;
let clicksLimit = 30;  //make limit on clicks

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(heigth)
};

$('#map').click(function (event){
    clicks++;
    if(clicks > clicksLimit) { //make limit on clicks
        alert('Game is over!')
        return;
    }
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);

    $('#clicks-remaining').text((clicksLimit - clicks) + ' left.');  // clicks remaining

    $('#distance').text(distanceHint);
    if (distance < 20) {
        alert('The treasure is found! Made clicks: ' + clicks);
    }

});



//Homework 

//Task1
//make the map bigger 800*800

//Task2
// add more hints

//Task3
// make limit on clicks
// limit is reached, game is over

//Task4
// display how many clicks left