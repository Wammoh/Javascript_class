// x =0
// while  (x< 100){
// // x+=1
// // console.log(x+" misissippi")
// // }


// // var num = 99

// // while ( num > 0){
// //     if (num ===1){
// //     console.log(num + " bottle of juice on the wall! "+num+" bottle of juice! Take one down, pass it around..."+ (num-1) +" bottles of juice on the wall!")
// //     num -=1}
// //     else if (num > 2 ){
// //     console.log(num + " bottles of juice on the wall! "+num+ " bottles of juice! Take one down, pass it around..."+ (num-1) + " bottles of juice on the wall!")
// //     num -=1}
// //     else if( num ===2){
// //     console.log(num+ " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around..."+ (num-1) + " bottle of juice on the wall!")
// //     num-=1
// //     }
// // }


// // rocketship

// countdown = 60
// while (countdown >=0){
//     if (countdown === 50){
//         console.log("Orbiter transfers from ground to internal power")
//         countdown-=1}
//     else if(countdown ===31){
//         console.log("Ground launch sequencer is go for auto sequence start")
//         countdown-=1}
//     else if(countdown ===16){
//         console.log("Activate launch pad sound suppression system")
//         countdown -=1}
//     else if(countdown ===10){
//         console.log("Activate main engine hydrogen burnoff system")
//         countdown-=1}
//     else if(countdown ===6){
//         console.log("Main engine start")
//         countdown-=1}
//     else if(countdown === 0){
//         console.log("Solid rocket booster ignition and liftoff! ")
//         countdown-=1}
//     else if(countdown >0){
//     console.log("T-"+countdown+" seconds\n")
//     countdown-=1}
// }

// for (x=9; x>=1; x--){
// //     console.log("hello"+x);
// // }

// let solution = 1;

// for (let i = 1; i <= 12; i++) {
//   solution *= i;
// }

// console.log(solution);


// for (var seat = 100; seat < 1; seat--){
//     for(let row = 25; row <1; row--){
//         console.log(seat +"-"+ row)
//     }
// }
// var sound +""
// function laugh(num){
// for (num; num === 0; num -1){
//     if (num == 1){
//         return "ha!"
//         num -= 1
//     }
//     else if (num > 1){
//         return "ha"
//         num -=1
//     }
// }
// }
// console.log(laugh(4))


// function buildTriangle(length){
//     var triangle = "";
//     for(lineNumber=1; lineNumber<= length; lineNumber++){
//         triangle =triangle + makeLine(lineNumber)
//     }
//         return triangle
//     }




// function makeLine(length) {
//     var line = "";
//     for (var j = 1; j <= length; j++) {
//         line += "* ";
//     }
//     return line + "\n";
// }

// console.log(buildTriangle(10))


var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  console.log(catSays);