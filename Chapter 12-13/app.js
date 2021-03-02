// // 1. Write a program that takes a character (number or string)
// // in a variable & checks whether the given input is a
// // number, uppercase letter or lower case letter. (Hint: ASCII
// // codes:- A=65, Z=90, a=97, z=122).

function myFunction(){
    var str = document.getElementById('text1');
    if(str.value == ''){
        str.focus();
        return;
    }
    var a = "ASCII Code is ==  ";
    document.getElementById('demo').innerHTML = a + str.value.charCodeAt(0);
}

// // 2. Write a JavaScript program that accept two integers and
// // display the larger. Also show if the two integers are equal.

// var a = 88;
// var b = 87;

// if(a > b){
//     document.write("The Larger Number is: " + a);
// }
// else if(b > a){
//     document.write("The Larger Number is: " + b);
// }
// else if(a == b){
//     document.write("Both Numbers are Equal");
// }


// // 3. Write a program that takes input a number from user &
// // state whether the number is positive, negative or zero.

// var num = prompt("Enter a Number");

// if(num > 0){
//     document.write("The number is positive");
// }
// else if(num == 0){
//     document.write("The number is zero");
// }
// else if(num < 0){
//     document.write("The number is negative");
// }



// // 4. Write a program that takes a character (i.e. string of
// // length 1) and returns true if it is a vowel, false otherwise

// var char = prompt("Enter a Character");

// // var vowel = ["a", "e", "i", "o", "u"];

// if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
//     document.write("True");
// }
// else if(char == "A" || char == "E" || char == "I" || char == "O" || char == "U"){
//     document.write("True");
// }
// else{
//     document.write("False");
// }


// // 5. Write a program that
// // a. Store correct password in a JS variable.
// // b. Asks user to enter his/her password
// // c. Validate the two passwords:
// // i. Check if user has entered password. If not, then
// // give message “ Please enter your password”
// // ii. Check if both passwords are same. If they are
// // same, show message “Correct! The password you
// // entered matches the original password”. Show
// // “Incorrect password” otherwise.

// var pass = "12345678";

// var input = prompt("Enter Paassword");

// if(input == ""){
//     document.write("Please enter your password");
// }
// else if(input == pass){
//     document.write("Correct! The password you entered matches the original password");
// }
// else{
//     document.write("Incorrect password");
// }



// // 6. This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";
// // else
// // greeting = "Good evening";
// // }

// var greeting;
// var hours = 13;
// if(hour < 18){
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }



// // 7. Write a program that takes time as input from user in 24
// // hours clock format like: 19:00 = 7pm. Implement the
// // following case using if, else & else if statements


// var time = prompt("Enter time in 24 hours format");

// if(time >= "00:00" && time < "12:00"){
//     console.log("Good Morning");
// }
// else if(time >= "12:00" && time < "17:00"){
//     console.log("Good Afternoon");
// }
// else if(time >= "17:00" && time < "21:00"){
//     console.log("Good Evening");
// }
// else if(time >= "21:00" && time <= "23:59"){
//     console.log("Good Night");
// }
// else{
//     console.log("Invalid Input");
// }