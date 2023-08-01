<<<<<<< HEAD
// Question 1
var num = Number(window.prompt("Enter a Number"))
var element1 = document.getElementById("print").innerHTML= num
// Question 2
var number = Number(window.prompt("Enter the Number"))
if (number % 3 === 0 && number % 4 === 0) {
    var element2 = document.getElementById("divisible").innerHTML= "Yes"
} else {
    var element2 = document.getElementById("divisible").innerHTML= "No"
}
// Question 3
var firstInt = Number(window.prompt("Enter First Integer"))
var secondInt = Number(window.prompt("Enter Second Integer"))
window.alert(Math.max(firstInt,secondInt))
// Question 4
var Number = Number(window.prompt("Enter the Integer"))
if (Number > 0) {
    window.alert("Positive")
} else if (Number < 0) {
    window.alert("Negative")
}
// Question 5
var number1 = Number(window.prompt("Enter First Integer"))
var number2 = Number(window.prompt("Enter Second Integer"))
var number3 = Number(window.prompt("Enter third Integer"))
window.alert(Math.max(Math.max(number1,number2),number3))
// Question 6
var numberType = Number(window.prompt("Enter the Integer"))
if (numberType % 2 === 0) {
    window.alert("even")
} else {
    window.alert("odd")
}
// Question 8
var charType = window.prompt("Enter a Character")
if (charType === "a" || charType === "e" || charType === "I" || charType === "o" || charType === "u") {
    var element3 = document.getElementById("char").innerHTML= "vowel"
} else {
    var element3 = document.getElementById("char").innerHTML= "Consonant"
}
// Question 9
var toNum = Number(window.prompt("Enter a Number"))
var toPrint = ""
for (let i = 1; i <= toNum; i++) {
    toPrint += String(i) + " "
}
var element4 = document.getElementById("to_num").innerHTML= toPrint
// Question 10
var numMultiply = Number(window.prompt("Enter a Number"))
var printMultiply = ""
for (let i = 2; i <= 12; i++) {
    printMultiply += String(numMultiply*i) + " "
}
var element4 = document.getElementById("num_multiply").innerHTML= printMultiply
// Question 11
var evemNum = Number(window.prompt("Enter a Number"))
var printEven = ""
for (let i = 2; i <= evemNum; i+=2) {
    printEven += String(i) + " "
}
var element4 = document.getElementById("even_num").innerHTML= printEven
// Question 12
var poweredNum = Number(window.prompt("Enter a Number"))
var power = Number(window.prompt("Enter the power"))
var result = 1
for (let i = 0; i < power; i++) {
    result *= poweredNum
}
window.alert(result)
// Question 12
var num1 = Number(window.prompt("Enter SUbject 1 mark"))
var num2 = Number(window.prompt("Enter SUbject 2 mark"))
var num3 = Number(window.prompt("Enter SUbject 3 mark"))
var num4 = Number(window.prompt("Enter SUbject 4 mark"))
var num5 = Number(window.prompt("Enter SUbject 5 mark"))
var total = num1+num2+num3+num4+num5
var average = (num1+num2+num3+num4+num5)/5
var percentage = average/500*100
window.alert("total = " + total + "\naverage = " + average + "\npercentage = " + percentage)
// Question 13
var monthNumber = Number(window.prompt("Enter Month Number"))
var _30daysMonths = ["4","6","9","11"]
var _31daysMonths = ["1","3","5","7","8","10","12"]
if (monthNumber == 2) {
    window.alert("Days in Month: "+ 28)
}
else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber ===11) {
    window.alert("Days in Month: "+ 30)
}
else {
    window.alert("Days in Month: "+ 31)
}
// Question 14
for (let i = 0; i < 5; i++) {
    var mark = Number(window.prompt("Enter subject " + (i+1) + " mark"))
    if (mark >= 90) {
        window.alert("Grade: A")
    }else if (mark >= 80) {
        window.alert("Grade: B")
    }else if (mark >= 70) {
        window.alert("Grade: C")
    }else if (mark >= 60) {
        window.alert("Grade: D")
    }else if (mark >= 40) {
        window.alert("Grade: E")
    }else{
        window.alert("Grade: F")
    }
}
// Question 15
var monthNumber = Number(window.prompt("Enter Month Number"))
switch (monthNumber) {
    case 2:
        window.alert("Days in Month: "+ 28)
        break;
    case 4:
        window.alert("Days in Month: "+ 30)
        break;
    case 6:
        window.alert("Days in Month: "+ 30)
        break;
    case 9:
        window.alert("Days in Month: "+ 30)
        break;
    case 11:
        window.alert("Days in Month: "+ 30)
        break;
    default:
        window.alert("Days in Month: "+ 31)
        break;
}
// QUESTION 16
var charType = window.prompt("Enter a Character")
switch (charType) {
    case "a":
        window.alert("vowel")
        break;
    case "i":
        window.alert("vowel")
        break;
    case "u":
        window.alert("vowel")
        break;
    case "e":
        window.alert("vowel")
        break;
    case "o":
        window.alert("vowel")
        break;
    default:
        window.alert("Consonant")
        break;
}
// Question 17
var number1 = Number(window.prompt("Enter number 1"))
var number2 = Number(window.prompt("Enter number 2"))
switch (number1 - number2 > 0) {
    case true:
        window.alert(number1 + " is the maximum")
        break;
    case false:
        window.alert(number2 + " is the maximum")
        break;
}
// Question 18
var number = Number(window.prompt("Enter a number"))
switch (number % 2 === 0) {
    case true:
        window.alert(number + " is even")
        break;
    case false:
        window.alert(number + " is odd")
        break;
}
// Question 19
var number = Number(window.prompt("Enter a number"))
switch (number > 0) {
    case true:
        window.alert("positive")
        break;
    case false:
        window.alert("negative")
        break;
}
// Question 20
var number1 = Number(window.prompt("Enter number 1"))
var number2 = Number(window.prompt("Enter number 2"))
var symbol = window.prompt("Enter symbol (+, -, *, /)")
switch (symbol) {
    case "+":
        window.alert(number1 + number2)
        break;
    case "-":
        window.alert(number1 - number2)
        break;
    case "*":
        window.alert(number1 * number2)
        break;
    case "/":
        window.alert(number1 / number2)
        break;
=======
// Question 1
var num = Number(window.prompt("Enter a Number"))
var element1 = document.getElementById("print").innerHTML= num
// Question 2
var number = Number(window.prompt("Enter the Number"))
if (number % 3 === 0 && number % 4 === 0) {
    var element2 = document.getElementById("divisible").innerHTML= "Yes"
} else {
    var element2 = document.getElementById("divisible").innerHTML= "No"
}
// Question 3
var firstInt = Number(window.prompt("Enter First Integer"))
var secondInt = Number(window.prompt("Enter Second Integer"))
window.alert(Math.max(firstInt,secondInt))
// Question 4
var Number = Number(window.prompt("Enter the Integer"))
if (Number > 0) {
    window.alert("Positive")
} else if (Number < 0) {
    window.alert("Negative")
}
// Question 5
var number1 = Number(window.prompt("Enter First Integer"))
var number2 = Number(window.prompt("Enter Second Integer"))
var number3 = Number(window.prompt("Enter third Integer"))
window.alert(Math.max(Math.max(number1,number2),number3))
// Question 6
var numberType = Number(window.prompt("Enter the Integer"))
if (numberType % 2 === 0) {
    window.alert("even")
} else {
    window.alert("odd")
}
// Question 8
var charType = window.prompt("Enter a Character")
if (charType === "a" || charType === "e" || charType === "I" || charType === "o" || charType === "u") {
    var element3 = document.getElementById("char").innerHTML= "vowel"
} else {
    var element3 = document.getElementById("char").innerHTML= "Consonant"
}
// Question 9
var toNum = Number(window.prompt("Enter a Number"))
var toPrint = ""
for (let i = 1; i <= toNum; i++) {
    toPrint += String(i) + " "
}
var element4 = document.getElementById("to_num").innerHTML= toPrint
// Question 10
var numMultiply = Number(window.prompt("Enter a Number"))
var printMultiply = ""
for (let i = 2; i <= 12; i++) {
    printMultiply += String(numMultiply*i) + " "
}
var element4 = document.getElementById("num_multiply").innerHTML= printMultiply
// Question 11
var evemNum = Number(window.prompt("Enter a Number"))
var printEven = ""
for (let i = 2; i <= evemNum; i+=2) {
    printEven += String(i) + " "
}
var element4 = document.getElementById("even_num").innerHTML= printEven
// Question 12
var poweredNum = Number(window.prompt("Enter a Number"))
var power = Number(window.prompt("Enter the power"))
var result = 1
for (let i = 0; i < power; i++) {
    result *= poweredNum
}
window.alert(result)
// Question 12
var num1 = Number(window.prompt("Enter SUbject 1 mark"))
var num2 = Number(window.prompt("Enter SUbject 2 mark"))
var num3 = Number(window.prompt("Enter SUbject 3 mark"))
var num4 = Number(window.prompt("Enter SUbject 4 mark"))
var num5 = Number(window.prompt("Enter SUbject 5 mark"))
var total = num1+num2+num3+num4+num5
var average = (num1+num2+num3+num4+num5)/5
var percentage = average/500*100
window.alert("total = " + total + "\naverage = " + average + "\npercentage = " + percentage)
// Question 13
var monthNumber = Number(window.prompt("Enter Month Number"))
var _30daysMonths = ["4","6","9","11"]
var _31daysMonths = ["1","3","5","7","8","10","12"]
if (monthNumber == 2) {
    window.alert("Days in Month: "+ 28)
}
else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber ===11) {
    window.alert("Days in Month: "+ 30)
}
else {
    window.alert("Days in Month: "+ 31)
}
// Question 14
for (let i = 0; i < 5; i++) {
    var mark = Number(window.prompt("Enter subject " + (i+1) + " mark"))
    if (mark >= 90) {
        window.alert("Grade: A")
    }else if (mark >= 80) {
        window.alert("Grade: B")
    }else if (mark >= 70) {
        window.alert("Grade: C")
    }else if (mark >= 60) {
        window.alert("Grade: D")
    }else if (mark >= 40) {
        window.alert("Grade: E")
    }else{
        window.alert("Grade: F")
    }
}
// Question 15
var monthNumber = Number(window.prompt("Enter Month Number"))
switch (monthNumber) {
    case 2:
        window.alert("Days in Month: "+ 28)
        break;
    case 4:
        window.alert("Days in Month: "+ 30)
        break;
    case 6:
        window.alert("Days in Month: "+ 30)
        break;
    case 9:
        window.alert("Days in Month: "+ 30)
        break;
    case 11:
        window.alert("Days in Month: "+ 30)
        break;
    default:
        window.alert("Days in Month: "+ 31)
        break;
}
// QUESTION 16
var charType = window.prompt("Enter a Character")
switch (charType) {
    case "a":
        window.alert("vowel")
        break;
    case "i":
        window.alert("vowel")
        break;
    case "u":
        window.alert("vowel")
        break;
    case "e":
        window.alert("vowel")
        break;
    case "o":
        window.alert("vowel")
        break;
    default:
        window.alert("Consonant")
        break;
}
// Question 17
var number1 = Number(window.prompt("Enter number 1"))
var number2 = Number(window.prompt("Enter number 2"))
switch (number1 - number2 > 0) {
    case true:
        window.alert(number1 + " is the maximum")
        break;
    case false:
        window.alert(number2 + " is the maximum")
        break;
}
// Question 18
var number = Number(window.prompt("Enter a number"))
switch (number % 2 === 0) {
    case true:
        window.alert(number + " is even")
        break;
    case false:
        window.alert(number + " is odd")
        break;
}
// Question 19
var number = Number(window.prompt("Enter a number"))
switch (number > 0) {
    case true:
        window.alert("positive")
        break;
    case false:
        window.alert("negative")
        break;
}
// Question 20
var number1 = Number(window.prompt("Enter number 1"))
var number2 = Number(window.prompt("Enter number 2"))
var symbol = window.prompt("Enter symbol (+, -, *, /)")
switch (symbol) {
    case "+":
        window.alert(number1 + number2)
        break;
    case "-":
        window.alert(number1 - number2)
        break;
    case "*":
        window.alert(number1 * number2)
        break;
    case "/":
        window.alert(number1 / number2)
        break;
>>>>>>> 227d3e6a0e681edc3e621bd08920807db25e7f45
}