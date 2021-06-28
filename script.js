// // Exercise n. 1 and 3

// var x = Math.floor(Math.random()*40 -5);

// if (x >= -5 && x <= 10) {
//     document.getElementById("trial").innerHTML ="the weather is cold";
// } else if( x > 10 && x <= 25) {

//     document.getElementById("trial").innerHTML ="the weather is moderate";
// } 
// else if ( x >= 32) {
//     document.getElementById("trial").innerHTML ="the weather is hot";
// } 
// else {
//     document.getElementById("trial").innerHTML ="the weather is moderate";
// }

// // Exercise Basic n.2

// var arr = [1, 7, -3, 9];
// var highest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (highest < arr[i]) {
//         highest = arr[i];
//     }
// }
// console.log(highest);


//EX. Intermediate n 1



// var grades = [76, 85, 65, 93, 81];
// var names = ["Martin", "Thomas", "Klaus", "Maria", "David"];

// for (let i = 0; i < grades.length; i++) {
//     document.getElementsByClassName("names")[i].innerHTML += names[i]+" = " +grades[i] +"<br>";
// }

// // for (let i = 0; i < grades.length; i++) {
    
// //     if (grades[i] < 60) {
// //     document.getElementsByClassName("names")[i].innerHTML = names[i]+" = " + "F" +"<br>";    }

// //     else if (grades[i] < 70) {
// //     document.getElementsByClassName("names")[i].innerHTML = names[i]+" = " + "D" +"<br>";    }

// //     else if (grades[i] < 80) {
// //     document.getElementsByClassName("names")[i].innerHTML = names[i]+" = " + "C" +"<br>"; }

// //     else if (grades[i] < 90) {
// //     document.getElementsByClassName("names")[i].innerHTML = names[i]+" = " + "B" +"<br>"; }

// //     else if (grades[i] <= 100) {
// //     document.getElementsByClassName("names")[i].innerHTML = names[i]+" = " + "A" +"<br>"; }
// // }

// var sum = 0;
// var avGrades = 0;
// for (let i in grades) {
//     sum += grades[i];
//     var avGrades = sum / 5;
    
// }

// if (avGrades < 60) {
// document.getElementsByClassName("endGrade")[0].innerHTML = "The avarage  grades is F";}

// else if (avGrades < 70) {
//     document.getElementsByClassName("endGrade")[0].innerHTML = "The avarage  grades is D";}

// else if (avGrades < 80) {
//     document.getElementsByClassName("endGrade")[0].innerHTML = "The avarage  grades is C";}

// else if (avGrades < 90) {
//     document.getElementsByClassName("endGrade")[0].innerHTML = "The avarage  grades is B";}

// else if (avGrades <= 100) {
//     document.getElementsByClassName("endGrade")[0].innerHTML = "The avarage  grades is A";}



// Exercise Intermediate 2

    // var x = Math.floor(Math.random()*101);

    for (var x=1; x < 101; x++){

    if( x % 15 ==0) {
        document.write("FizzBuzz" + "<br>");
    }

    else if (x % 5 ==0) {
        document.write("Buzz " + "<br>");
    }

    else if (x % 3 ==0 ) {
        document.write("Fizz" + "<br>");
    }
    else document.write(x + "<br>");

    }

console.log(x);