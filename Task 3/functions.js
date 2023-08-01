<<<<<<< HEAD
// Question 1
function print() {
    var num = Number(window.prompt("Enter a Number"))
    var element1 = document.getElementById("print").innerHTML= num
}

print()

// Question 2
function divisible_3_4() {
    var number = Number(window.prompt("Enter the Number"))
    if (number % 3 === 0 && number % 4 === 0) {
        return "Yes";
    } else {
        return "No";
    }
}

var element2 = document.getElementById("divisible").innerHTML= divisible_3_4()

// Question 3

var firstInt = Number(window.prompt("Enter First Integer"))
var secondInt = Number(window.prompt("Enter Second Integer"))

function max(firstInt, secondInt) {
    window.alert(Math.max(firstInt, secondInt))
}

max(firstInt, secondInt)

// Question 4
function positiveORnegative() {
    var Number = Number(window.prompt("Enter the Integer"))
    if (Number > 0) {
        window.alert("Positive")
    } else if (Number < 0) {
        window.alert("Negative")
    }
}

positiveORnegative()

// Question 5
var number1 = Number(window.prompt("Enter First Integer"))
var number2 = Number(window.prompt("Enter Second Integer"))
var number3 = Number(window.prompt("Enter third Integer"))

function maxOfThree(number1, number2, number3) {
    window.alert(Math.max(Math.max(number1, number2), number3))
}

maxOfThree(number1, number2, number3)

// Question 6
function evenORodd() {
    var numberType = Number(window.prompt("Enter the Integer"))
    if (numberType % 2 === 0) {
        window.alert("even")
    } else {
        window.alert("odd")
    }
}

evenORodd()

// Question 8
function vowelORconsonant() {
    var charType = window.prompt("Enter a Character")
    if (charType === "a" || charType === "e" || charType === "I" || charType === "o" || charType === "u") {
        return "vowel";
    } else {
        return "Consonant";
    }
}

var element3 = document.getElementById("char").innerHTML= vowelORconsonant()

// Question 9
function untilNum() {
    var toNum = Number(window.prompt("Enter a Number"))
    var toPrint = ""
    for (let i = 1; i <= toNum; i++) {
        toPrint += String(i) + " "
    }
    return toPrint;
}

var element4 = document.getElementById("to_num").innerHTML= toPrint

// Question 10
var numMultiply = Number(window.prompt("Enter a Number"))

function numMultiplication(numMultiply) {
    
    var printMultiply = ""
    for (let i = 2; i <= 12; i++) {
        printMultiply += String(numMultiply*i) + " "
    }
    return printMultiply;
}

var element4 = document.getElementById("num_multiply").innerHTML= numMultiplication(numMultiply)

// Question 11
var evemNum = Number(window.prompt("Enter a Number"))

function evemNumbers(evemNum) {
    
    var printEven = ""
    for (let i = 2; i <= evemNum; i+=2) {
        printEven += String(i) + " "
    }
    return printEven;
}

var element4 = document.getElementById("even_num").innerHTML= evemNumbers(evemNum)

// Question 12
function poweredNumbers() {
    var poweredNum = Number(window.prompt("Enter a Number"))
    var power = Number(window.prompt("Enter the power"))
    var result = 1
    for (let i = 0; i < power; i++) {
        result *= poweredNum
    }
    window.alert(result)
}

poweredNumbers()

// Question 12

var sub1 = Number(window.prompt("Enter SUbject 1 mark"))
var sub2 = Number(window.prompt("Enter SUbject 2 mark"))
var sub3 = Number(window.prompt("Enter SUbject 3 mark"))
var sub4 = Number(window.prompt("Enter SUbject 4 mark"))
var sub5 = Number(window.prompt("Enter SUbject 5 mark"))

function subjects(subject1, subject2, subject3, subject4, subject5) {
    var total = subject1 + subject2 + subject3 + subject4 + subject5
    var average = total / 5
    var percentage = average / 500 * 100
    window.alert("total = " + total + "\naverage = " + average + "\npercentage = " + percentage)
}

subjects(sub1, sub2, sub3, sub4, sub5)

// Question 13
var monthNumber = Number(window.prompt("Enter Month Number"))

function daysOfMonth(monthNumber) {
    var _30daysMonths = ["4","6","9","11"]
    var _31daysMonths = ["1","3","5","7","8","10","12"]
    if (monthNumber === 2) {
        window.alert("Days in Month: "+ 28)
    }
    else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber ===11) {
        window.alert("Days in Month: "+ 30)
    }
    else {
        window.alert("Days in Month: "+ 31)
    }
}

daysOfMonth(monthNumber)

// Question 14
function grade() {
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
}

grade()

// Question 15
var monthNumber = Number(window.prompt("Enter Month Number"))

function monthDays(monthNumber) {
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
}

monthDays(monthNumber)

// QUESTION 16
var charType = window.prompt("Enter a Character")

function characterType(charType) {
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
}

characterType(charType)

// Question 17
var number1 = Number(window.prompt("Enter number 1"))
var number2 = Number(window.prompt("Enter number 2"))

function maximum(number1, number2) {
    switch (number1 - number2 > 0) {
        case true:
            window.alert(number1 + " is the maximum")
            break;
        case false:
            window.alert(number2 + " is the maximum")
            break;
    }
}

maximum(number1, number2)

// Question 18
var number = Number(window.prompt("Enter a number"))

function evenORodd2(number) {
    switch (number % 2 === 0) {
        case true:
            window.alert(number + " is even")
            break;
        case false:
            window.alert(number + " is odd")
            break;
    }
}

evenORodd2(number)

// Question 19
var number = Number(window.prompt("Enter a number"))

function numberType2(number) {
    switch (number > 0) {
        case true:
            window.alert("positive")
            break;
        case false:
            window.alert("negative")
            break;
    }
}

numberType2(number)

// Question 20
var number1 = Number(window.prompt("Enter number 1"))
var number2 = Number(window.prompt("Enter number 2"))
var symbol = window.prompt("Enter symbol (+, -, *, /)")

function calc(number1, number2, symbol) {
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
    }
}

calc(number1, number2, symbol)



=======
// Question 1
function print() {
    var num = Number(window.prompt("Enter a Number"))
    var element1 = document.getElementById("print").innerHTML= num
}

print()

// Question 2
function divisible_3_4() {
    var number = Number(window.prompt("Enter the Number"))
    if (number % 3 === 0 && number % 4 === 0) {
        return "Yes";
    } else {
        return "No";
    }
}

var element2 = document.getElementById("divisible").innerHTML= divisible_3_4()

// Question 3

var firstInt = Number(window.prompt("Enter First Integer"))
var secondInt = Number(window.prompt("Enter Second Integer"))

function max(firstInt, secondInt) {
    window.alert(Math.max(firstInt, secondInt))
}

max(firstInt, secondInt)

// Question 4
function positiveORnegative() {
    var Number = Number(window.prompt("Enter the Integer"))
    if (Number > 0) {
        window.alert("Positive")
    } else if (Number < 0) {
        window.alert("Negative")
    }
}

positiveORnegative()

// Question 5
var number1 = Number(window.prompt("Enter First Integer"))
var number2 = Number(window.prompt("Enter Second Integer"))
var number3 = Number(window.prompt("Enter third Integer"))

function maxOfThree(number1, number2, number3) {
    window.alert(Math.max(Math.max(number1, number2), number3))
}

maxOfThree(number1, number2, number3)

// Question 6
function evenORodd() {
    var numberType = Number(window.prompt("Enter the Integer"))
    if (numberType % 2 === 0) {
        window.alert("even")
    } else {
        window.alert("odd")
    }
}

evenORodd()

// Question 8
function vowelORconsonant() {
    var charType = window.prompt("Enter a Character")
    if (charType === "a" || charType === "e" || charType === "I" || charType === "o" || charType === "u") {
        return "vowel";
    } else {
        return "Consonant";
    }
}

var element3 = document.getElementById("char").innerHTML= vowelORconsonant()

// Question 9
function untilNum() {
    var toNum = Number(window.prompt("Enter a Number"))
    var toPrint = ""
    for (let i = 1; i <= toNum; i++) {
        toPrint += String(i) + " "
    }
    return toPrint;
}

var element4 = document.getElementById("to_num").innerHTML= toPrint

// Question 10
var numMultiply = Number(window.prompt("Enter a Number"))

function numMultiplication(numMultiply) {
    
    var printMultiply = ""
    for (let i = 2; i <= 12; i++) {
        printMultiply += String(numMultiply*i) + " "
    }
    return printMultiply;
}

var element4 = document.getElementById("num_multiply").innerHTML= numMultiplication(numMultiply)

// Question 11
var evemNum = Number(window.prompt("Enter a Number"))

function evemNumbers(evemNum) {
    
    var printEven = ""
    for (let i = 2; i <= evemNum; i+=2) {
        printEven += String(i) + " "
    }
    return printEven;
}

var element4 = document.getElementById("even_num").innerHTML= evemNumbers(evemNum)

// Question 12
function poweredNumbers() {
    var poweredNum = Number(window.prompt("Enter a Number"))
    var power = Number(window.prompt("Enter the power"))
    var result = 1
    for (let i = 0; i < power; i++) {
        result *= poweredNum
    }
    window.alert(result)
}

poweredNumbers()

// Question 12

var sub1 = Number(window.prompt("Enter SUbject 1 mark"))
var sub2 = Number(window.prompt("Enter SUbject 2 mark"))
var sub3 = Number(window.prompt("Enter SUbject 3 mark"))
var sub4 = Number(window.prompt("Enter SUbject 4 mark"))
var sub5 = Number(window.prompt("Enter SUbject 5 mark"))

function subjects(subject1, subject2, subject3, subject4, subject5) {
    var total = subject1 + subject2 + subject3 + subject4 + subject5
    var average = total / 5
    var percentage = average / 500 * 100
    window.alert("total = " + total + "\naverage = " + average + "\npercentage = " + percentage)
}

subjects(sub1, sub2, sub3, sub4, sub5)

// Question 13
var monthNumber = Number(window.prompt("Enter Month Number"))

function daysOfMonth(monthNumber) {
    var _30daysMonths = ["4","6","9","11"]
    var _31daysMonths = ["1","3","5","7","8","10","12"]
    if (monthNumber === 2) {
        window.alert("Days in Month: "+ 28)
    }
    else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber ===11) {
        window.alert("Days in Month: "+ 30)
    }
    else {
        window.alert("Days in Month: "+ 31)
    }
}

daysOfMonth(monthNumber)

// Question 14
function grade() {
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
}

grade()

// Question 15
var monthNumber = Number(window.prompt("Enter Month Number"))

function monthDays(monthNumber) {
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
}

monthDays(monthNumber)

// QUESTION 16
var charType = window.prompt("Enter a Character")

function characterType(charType) {
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
}

characterType(charType)

// Question 17
var number1 = Number(window.prompt("Enter number 1"))
var number2 = Number(window.prompt("Enter number 2"))

function maximum(number1, number2) {
    switch (number1 - number2 > 0) {
        case true:
            window.alert(number1 + " is the maximum")
            break;
        case false:
            window.alert(number2 + " is the maximum")
            break;
    }
}

maximum(number1, number2)

// Question 18
var number = Number(window.prompt("Enter a number"))

function evenORodd2(number) {
    switch (number % 2 === 0) {
        case true:
            window.alert(number + " is even")
            break;
        case false:
            window.alert(number + " is odd")
            break;
    }
}

evenORodd2(number)

// Question 19
var number = Number(window.prompt("Enter a number"))

function numberType2(number) {
    switch (number > 0) {
        case true:
            window.alert("positive")
            break;
        case false:
            window.alert("negative")
            break;
    }
}

numberType2(number)

// Question 20
var number1 = Number(window.prompt("Enter number 1"))
var number2 = Number(window.prompt("Enter number 2"))
var symbol = window.prompt("Enter symbol (+, -, *, /)")

function calc(number1, number2, symbol) {
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
    }
}

calc(number1, number2, symbol)



>>>>>>> 227d3e6a0e681edc3e621bd08920807db25e7f45
