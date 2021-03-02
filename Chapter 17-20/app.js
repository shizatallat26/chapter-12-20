// // 3. Write a program to print numeric counting from 1 to 10.

// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }



// // 4. Write a program to print multiplication table of any
// // number using for loop. Table number & length should be
// // taken as an input from user.

// var tab = prompt("Enter Table Number");
// var len = prompt("Enter Table Length");

// document.write("<h1>Table of desired value</h1>");
// for(var i = 1; i <= len; i++){
//     document.write(tab + " x " + i + " = " + i*tab + "<br/>");
// }



// // 5. Write a program to print items of the following array
// // using for loop:
// // fruits = [“apple”, “banana”, “mango”, “orange”,
// // “strawberry”]

// var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

// for(var i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }


// // 6. Generate the following series in your browser. See example output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// document.write("<br /><br /> <br /><h1>Counting</h1><br />");
// for(var i = 1;i <= 15; i++){
//     document.write([i] + ",");
// }

// document.write("<br /><br /> <br /><h1>Counting</h1><br />");
// for(var i = 10; i > 0; i--){
//     document.write([i] + ",");
// }


// document.write("<br /><br /> <br /><h1>Even</h1><br />");
//     for(var i = 0; i <= 20; i++){
//         if(i % 2 === 0){
//         document.write([i] + ",");
//      }
// }

// document.write("<br /><br /> <br /><h1>Odd</h1><br />");
//     for(var i = 0; i <= 20; i++){
//         if(i % 2 !== 0){
//         document.write([i] + ",");
//      }
// }

// document.write("<h1>Series</h1>")
// for(var i = 1; i<=20; i++){
//     if(i % 2 == 0){
//         document.write(i + "k,");
//     }
// }


// // 8. Write a program to identify the largest number in the
// // given array.
// // A = [24, 53, 78, 91, 12].


// var arr = [24, 53, 78, 91, 12];
// var max = Math.max(...arr);
// document.write(max);



// // 9. Write a program to identify the smallest number in the
// // given array.
// // A = [24, 53, 78, 91, 12]

// var arr = [24, 53, 78, 91, 12];
// var min = Math.min(...arr);
// document.write(min);


// // 10. Write a program to print multiples of 5 ranging 1 to 100.

// for(var i = 1; i <= 100; i++){
//     if(i % 5 == 0){
//         console.log(i);
//     }
// }


