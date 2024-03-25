               //Chapter Number 01 Start Here 



// Qno01. Write a script to greet your website visitor using JS alert box.

var greeting = "Welcome to my website"

alert(greeting)

// Qno02. Write a script to display following message on your web page:

// var password = "Error! Please enter a valid password"

// alert(password)


// Qno03. Write a script to display following message on your web 
// page: (Hint : Use line break)

// alert("Welcome to JS Land... \n Happy Coding!")

// Qno04. Write a script to display following messages in sequence:

// alert("Welcome to JS Land")

// alert('Happy Coding! \n  \n ✅ prevent this page from creating additional dialogs');

// Qno05. Generate the following message through browser’s developer console

// var sentence = "Hello... I can run JS through my web browser's console"

// alert(sentence)


                // Chapter Number 01 Close Here



               //Chapter Number 02 Start Here 


// Qno01. Declare a variable called username.

var userName = "Muhammad Hamza Qadri"

alert(userName)

alert("My Name is Muhammad Hamza Qadri")

// Qno02. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

alert("Welcome to this Web Page \n \n How can I help You Please tell me?")

// Qno03.Write a script to save student’s bio data in JS variables and 
// show the data in alert boxes.

alert("This is Muhammad Hamza Qadri")
alert("I'm 26 years old")
alert("I'm Learnig Web Mobile Application")

// Qno04.Write a script to display the following alert using one JS 
// variable:


alert("PIZZA \nPIZZ \nPIZ \nPI \nP")

let email = "muhammadhamza318@gmail.com"
let message = "My Email is " + email

alert(message)

// Qno05.Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:


var messageBox = "I'm trying to learn from the Book A smarter way to learn JavaScript"

// Qno06.Write a script to display this in browser through JS 

document.write(`<h1>Chapter No 02</h1>`)
document.write(`<br><h2>Question no 06</h2>`)

document.write(`<h1>Yah! I can write HTML content through JavaScript</h1>`)


// Qno07.Store following string in a variable and show in alert and 
// browser through JS


var style = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"

alert(style)


                // Chapter Number 02 Close Here


                //Chapter Number 03 Start Here


// Qno01.Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

document.write(`<br><h1>Chapter no 03</h1>`)
document.write(`<h2>Question no 02</h2>`)

// Check if the 'visits' key exists in localStorage
if (localStorage.getItem('visits')) {
    // If it exists, increment the value by 1
    localStorage.setItem('visits', parseInt(localStorage.getItem('visits')) + 1);
} else {
    // If it doesn't exist, set it to 1
    localStorage.setItem('visits', 1);
}

// Get the number of visits from localStorage
let numberOfVisits = parseInt(localStorage.getItem('visits'));

// Display the number of visits on the web page
alert(`You have visited this site ${numberOfVisits} times.`);


// Qno02.Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser

document.write(`<br><br><h2>Question no 03</h2>`)

var birth = 1998
var birthYear = "My Birth Year is " + birth

document.write(`<b>${birthYear}</b>`)

// Qno03.A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

document.write(`<h2>Question no 04</h2>`)

var visitorName = "John Doe"
var productTitle = "5 T-shirt"

document.write(`<p><b>${visitorName}</b> ordered <b>${productTitle}</b> (s) on XYZ Clothing store</p>`)

            // Chapter Number 03 Close Here 

           //Chapter Number 04 Start Here


 
// Qno01.Declare 5 legal & 5 illegal variable names.
           

// 5legal Variable
// myVar
// _myVar
// $myVar
// myVar123
// myVar_name           


// 5illegal Varialbe           
// 123myVar (Cannot start with a number)
// my-Var (Cannot contain special characters other than underscore and dollar sign)
// my Var (Cannot contain spaces)
// var (Cannot use reserved keywords)
// my#Var (Cannot contain special characters other than underscore and dollar sign)


// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write(`<br><br><h1>Chapter no 04</h1>`)
document.write(`<h2>Question no 03</h2>`)
     
        document.write(`<b>Rules for naming JS variables<b> <br>`)    
        document.write(`<p>b) Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable.</p><br>`);
        document.write(`<p> c) Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name.</p><br>`);
        document.write(`<p> d) Variable names are case-sensitive.</p><br>`);
        document.write(`<p> e) Variable names should not be JavaScript reserved keywords.</p>`);


            // Chapter Number 04 Close Here


            //Chapter Number 05 Start Here

// Qno01.Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.            

document.write(`<br><br><h1>Chapter no 05</h1>`)
document.write(`<h2>Question no 01</h2>`)

var num1 = 8
var num2 = 15
var add = "8 + 15 ="
var numSum = num1 + num2

document.write(`<b>${add} ${numSum}</b>`)

// Qno02.Repeat task1 for subtraction, multiplication, division &
// modulus.

//Addtional Condition

document.write(`<br><br><h2>Question no 02</h2>`)

document.write(`<h2>This is this task of Addition , Subtraction , Multiplication , Division , Modulus</h2>`)


var add = 50 + 30
var added = "50 + 30 ="
 

var additional = "Your sum value is"
document.write(`<p>${additional}  ${added} ${add}</p>`)

//Subtraction Condition

var subtract = 50 - 30
var subValue = "50 - 30 ="

var subtraction = "Your subtract value is"
document.write(`<br><p>${subtraction} ${subValue} ${subtract}</p>`)


// Multiplication Condition

var multiply = 50 * 30
var multiplication = "50 x 50 ="

var multiple = "Your multiplication is"
document.write(`<br><p>${multiple} ${multiplication} ${multiply}</p>`)



//Divisional Condition

var divide = 50 / 50
var division = "50 / 50 ="

var Divisional = "Your divide value is"
document.write(`<br><p>${Divisional} ${division} ${divide}</p>`)


// Modulas Condition

var modulus = 50 % 20

var ans = "50 % 20 ="

var answer = "Your modulus value is"
document.write(`<br><p>${answer} ${ans} ${modulus}</p>`)



// Qno03. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.

document.write("<h2>Question no 03</h2>")

//declare variable

let myVariable;

// Show the value of variable in your browser
document.write("Value after declaration is " + myVariable + "<br>")

// Initialize the variable with some number
myVariable = 5;


// Show the initial value of variable
document.write("Intialize value is " + myVariable + "<br>")


// Increment the variable
myVariable++


// Show the value of variable after increment
document.write("Value of after increment is " + myVariable + "<br>")


// Add 7 to the variable
myVariable += 7 ;


// Show the value of variable after addition
document.write("Value of after addtion is " + myVariable + "<br>")


// Decrement the variable
myVariable--


// Show the value of variable after decrement
document.write("Value of after decrement is " + myVariable + "<br>")


// Show the remainder after dividing the variable's value by 3
var remainder = myVariable % 3;


// Output the remainder
document.write("This reminder value is " + remainder + "<br>")


// Qno04. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output:


document.write("<h2>Question no 04</h2>")


// Cost of one movie ticket
var movieCost = 600;


// Number of tickets to buy
var tickets = 5;


// Calculate the total cost
var totalCostMovie = movieCost * tickets;


// Output the total cost
document.write("Total cost of buying is " + tickets + " tickets " + totalCostMovie + " PKR")



// Qno05. Write a script to display multiplication table of any 
// number in your browser. E.g


document.write(`<h2>Question no 05</h2>`)

var tableNumber = 4;
var num = 1

document.write(`<p>${tableNumber} x ${num} = ${tableNumber * num}</p>`)
document.write(`<p>${tableNumber} x ${num++} = ${tableNumber * num}</p>`)
document.write(`<p>${tableNumber} x ${num++} = ${tableNumber * num}</p>`)
document.write(`<p>${tableNumber} x ${num++} = ${tableNumber * num}</p>`)
document.write(`<p>${tableNumber} x ${num++} = ${tableNumber * num}</p>`)
document.write(`<p>${tableNumber} x ${num++} = ${tableNumber * num}</p>`)
document.write(`<p>${tableNumber} x ${num++} = ${tableNumber * num}</p>`)
document.write(`<p>${tableNumber} x ${num++} = ${tableNumber * num}</p>`)
document.write(`<p>${tableNumber} x ${num++} = ${tableNumber * num}</p>`)
document.write(`<p>${tableNumber} x ${num++} = ${tableNumber * num}</p>`)




// Qno06. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:


document.write(`<h2>Question no 06</h2>`)


// Store a Celsius temperature into a variable
let celsius = 30;

// Convert it to Fahrenheit
let fahrenheit = celsius * 9 / 5 + 32;

// Output the result
document.write(`<p class = "para">${celsius} °C is ${fahrenheit}  °F</p>`);

// Store a Fahrenheit temperature into a variable
let fahrenheit2 = 86;

// Convert it to Celsius
let celsius2 = (fahrenheit2 - 32) * 5 / 9;

// Output the result
document.write(`<p class = "para">${fahrenheit2} °F is  ${celsius2} °C</p>`);



// Qno.07 Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charge



document.write(`<h2>Question no 07</h2>`)


//Price of item 1

var price1 = 650;

//Ordered quantity of item 1
var quantity1 = 3;

var item1 = 650 * 3;


//price of item 2
var price2 = 100;


//Ordered quantity of item 2
var quantity2 = 7;


var item2 = 100 * 7; 

var shipping = 100


//this is your order solution

var totalCostOfOrder = (price1 * quantity1) + (price2 * quantity2) + (shipping)

document.write(`<h2>Shoppin Carts</h2> <br><br>`)


// this is the detail of your orders
document.write("Price of item 1 is " + price1 + "<br>")
document.write("Quantity of item 1 is " + quantity1 + "<br>")
document.write("Price of item 2 is " + price2 + "<br>")
document.write("Quantity of item 2 is " + quantity2 + "<br>")
document.write("Shipping Charges" + shipping + "<br>")

//This is your total cost of order 
document.write("Total cost of your order is " + totalCostOfOrder + "<br>")



// Qno08. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser


document.write(`<h2>Question no 08</h2>`)


document.write(`<h2>Marks Sheet</h2> <br><br>`)


//Your total marks 

var totalMarks = 980;


//Your obtained marks

var obtainedMarks = 804; 

var percentage = (obtainedMarks * 100) / totalMarks


document.write("Total Marks " + totalMarks + "<br>")
document.write("Obtained Marks " + obtainedMarks + "<br>")
document.write("Percentage is " + percentage+"% " + "<br>")




// Qno09. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)


document.write("<h2>Question no 09</h2> <br>")


document.write("<h2>Currency in PKR</h2>")

//USD Currency multiplication

var usdPKR = 10 * 104.80;


//Suadi Currency Mutliplication

var suadiPKR = 25 * 28;


//Total Currency in PKR
var totalCurrency = usdPKR + suadiPKR

document.write("US Dollar is " + usdPKR + "<br>")
document.write("Suadi Riyal is " + suadiPKR + "<br>")

document.write("Total Currency in PKR " + totalCurrency + "<br>")



// Qno10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression



document.write("<h2>Question no 10</h2> <br>")

var initial = 10; 

var initialnum = 10 + 5;

var addedVar = "10 + 5 ="

var thenMultiply = initialnum * 10; 

var multipleValue = "15 x 10 ="

var thenDivide = thenMultiply / 2

var dividedVar = "150 / 2 ="




document.write("Initial number is " + initial + "<br>")
document.write("Then Added number 10 the value is " + addedVar + initialnum + "<br>")
document.write("Then multiplication number is 10 the value is " + multipleValue + thenMultiply + "<br>")
document.write("Then divided number is 2 the value is " + dividedVar + thenDivide + "<br>")





// Qno11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.


document.write("<h2>Question no 11</h2>")

var currentYear = 2024;
var birthYear = 1996;

var age = 2024 - 1996; 


document.write("Current Year is " + currentYear + "<br>")
document.write("Birth Year is " + birthYear + "<br>")
document.write("Your age is " + age + "<br>")




// Qno13.The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.


document.write("<h2>Question no 13</h2>")


document.write("<h2>The Lifetime Supply Calculator</h2>")


var fvrtsnaks = "Chocolate"

document.write("Favourite Snacks : " + fvrtsnaks + "<br>")


var currentAge = 15;

document.write("Current Age : " + currentAge + "<br>")


var maxAge = 65; 

document.write("Estimated Maximum Age : " + maxAge + "<br>")


var perDayChocolates = 3;

document.write("Amount of per day snacks : " + perDayChocolates + "<br>")


var remainingYear = maxAge - currentAge;

var daysRemaining = remainingYear * 365;

var totalNeeded = daysRemaining * perDayChocolates;



document.write(`<p>You will need ${totalNeeded} ${fvrtsnaks} to last you until ripe old age of ${maxAge}</p>`)

