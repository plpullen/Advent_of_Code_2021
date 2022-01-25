// --- Day 1: Sonar Sweep ---
// You're minding your own business on a ship at sea when the overboard alarm goes off! You rush to see if you can help. Apparently, one of the Elves tripped and accidentally sent the sleigh keys flying into the ocean!

// Before you know it, you're inside a submarine the Elves keep ready for situations like this. It's covered in Christmas lights (because of course it is), and it even has an experimental antenna that should be able to track the keys if you can boost its signal strength high enough; there's a little meter that indicates the antenna's signal strength by displaying 0-50 stars.

// Your instincts tell you that in order to save Christmas, you'll need to get all fifty stars by December 25th.

// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

// As the submarine drops below the surface of the ocean, it automatically performs a sonar sweep of the nearby sea floor. On a small screen, the sonar sweep report (your puzzle input) appears: each line is a measurement of the sea floor depth as the sweep looks further and further away from the submarine.

// For example, suppose you had the following report:

// 199
// 200
// 208
// 210
// 200
// 207
// 240
// 269
// 260
// 263
// This report indicates that, scanning outward from the submarine, the sonar sweep found depths of 199, 200, 208, 210, and so on.

// The first order of business is to figure out how quickly the depth increases, just so you know what you're dealing with - you never know if the keys will get carried into deeper water by an ocean current or a fish or something.

// To do this, count the number of times a depth measurement increases from the previous measurement. (There is no measurement before the first measurement.) In the example above, the changes are as follows:

// 199 (N/A - no previous measurement)
// 200 (increased)
// 208 (increased)
// 210 (increased)
// 200 (decreased)
// 207 (increased)
// 240 (increased)
// 269 (increased)
// 260 (decreased)
// 263 (increased)
// In this example, there are 7 measurements that are larger than the previous measurement.

// How many measurements are larger than the previous measurement?



// WITH X DATASET HOW DO YOU COUNT THE NUMBER OF TIMES THE DEPTH INCREASES?
// let depthList = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
// //depthList.length()-1 == 9

// // i==8
// // i+1==9

// let accumulator = 0;

// for(let i = 0; i<depthList.length-1; i++){
//     if (depthList[i] < depthList[i+1]){
//         accumulator++;
//     };
// };

// console.log(accumulator);

// var str=document.getElementById("myTextarea").value
// var t=str.split("\n");
// for (var i=0;i<t.length;i++)
// {
//   var arr=t[i].split("\t");
//   document.write("'<row dc= '" + arr[0] + "' al='" + arr[1] + "' msg='" + arr[2] + "' />'")
// }

//--- Day 2: Dive! --- Part 1.
//APPLY THE CODE IN THE BROWSER CONSOLE!!! -----PROBLEM returned an undefined in the console ----
//how to simplify?

// let arr = $0.innerText.split('\n')
// let newArr = []

// for(let i=0;i<arr.length;i++){
//         newArr.push(arr[i].split(' '))
//         newArr[i][1] = Number(newArr[i][1])
// }

// let horizontal = 0
// let depth = 0

// for(let i = 0; i<newArr.length; i++){
//     let direction = newArr[i][0]
//     switch (direction){
//         case 'forward':
//             horizontal += newArr[i][1]
//             break;
//         case 'down':
//             depth += newArr[i][1]
//             break;
//         case 'up':
//             depth -= newArr[i][1]
//             break;
//         default:
//             console.log("invalid data")
//             break;
//     }

// }
// console.log(horizontal*depth)



//--- Day 2: Dive! --- Part 2.

//APPLY THE CODE IN THE BROWSER CONSOLE!!! -----PROBLEM returned an undefined in the console ----
//how to simplify?

// let arr = $0.innerText.split('\n')
// let newArr = []
// let aim = 0

// for(let i=0;i<arr.length;i++){
//         newArr.push(arr[i].split(' '))
//         newArr[i][1] = Number(newArr[i][1])
// }

// let horizontal = 0
// let depth = 0

// for(let i = 0; i<newArr.length; i++){
//     let direction = newArr[i][0]
//     switch (direction){
//         case 'forward':
//             horizontal += newArr[i][1]
//             depth = depth + (aim*newArr[i][1])
//             break;
//         case 'down':
//             aim += newArr[i][1]
//             break;
//         case 'up':
//             aim -= newArr[i][1]
//             break;
//         default:
//             console.log("invalid data")
//             break;
//     }

// }
// console.log(horizontal*depth)



//--- Day 3: Binary Diagnostic ---