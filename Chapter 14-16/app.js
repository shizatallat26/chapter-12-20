// // 8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:


// var studentNames = ["Michael", "John", "Tony"];

// var score = ["320", "230", "480"];

// var totalMarks = 500;

// var student1 = (score[0] / totalMarks) * 100;
// var student2 = (score[1] / totalMarks) * 100;
// var student3 = (score[2] / totalMarks) * 100;

// document.write("Score of " + studentNames[0] + " is " + score[0] + ". " + "Percentage: " + student1 + "%");
// document.write("<br>");
// document.write("Score of " + studentNames[1] + " is " + score[1] + ". " + "Percentage: " + student2 + "%");
// document.write("<br>");
// document.write("Score of " + studentNames[2] + " is " + score[2] + ". " + "Percentage: " + student3 + "%");



// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort method.


// var studentsScore = ["320", "230", "480", "120"];
// document.write("Scores of Students : " + studentsScore);

// document.write("<br>");

// var ordered = studentsScore.sort();
// document.write("Ordered Score of Students : " + ordered);


// // 11. Write a program to initialize an array with city names.
// // Copy 3 array elements from cities array to selectedCities array

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// document.write("Cities list:");
// document.write("<br>");
// document.write(cities);
// document.write("<br>");

// var selected = cities.slice(0,3);
// document.write("Selected cities list:");
// document.write("<br>");
// document.write(selected);


// // 12. Write a program to create a single string from the
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method)

// var arr = ["This", "is", "my", "cat"];

// document.write(arr.join(" "));


// // 13. Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)

// var arr = ["Keyboard", "Mouse", "Printer", "Monitor"];

// document.write("Devices:");
// document.write("<br>");
// document.write(arr);
// document.write("<br><br>");

// document.write("Out:");
// document.write("<br>");
// document.write(arr[0]);
// document.write("<br>");
// document.write(arr[1]);
// document.write("<br>");
// document.write(arr[2]);
// document.write("<br>");
// document.write(arr[3]);



// // 14. Create a new array. Store values one by one in such a way
// // that you can access the values in reverse order. (Last InFirst Out)

// var arr = ["Keyboard", "Mouse", "Printer", "Monitor"];

// document.write("Devices:");
// document.write("<br>");
// document.write(arr);
// document.write("<br><br>");

// document.write("Out:");
// document.write("<br>");
// document.write(arr[3]);
// document.write("<br>");
// document.write(arr[2]);
// document.write("<br>");
// document.write(arr[1]);
// document.write("<br>");
// document.write(arr[0]);


