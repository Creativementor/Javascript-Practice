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

let visitor = localStorage.getItem('visitor') || 0 ;


visitor++

localStorage.getItem('visitor' , visitor);

document.write(`<h2>You have visit this site ${visitor} times</h2>`)


// Qno02.Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser

var birth = 1998
var birthYear = "My Birth Year is " + birth

document.write(`<h2>${birthYear}</h2>`)

// Qno03.A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "John Doe"
var productTitle = "5 T-shirt"

document.write(`<p class = "heading">${visitorName} ordered ${productTitle} (s) on XYZ Clothing store</p>`)

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


        document.write("b) Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable.<br>");
        document.write("c) Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name.<br>");
        document.write("d) Variable names are case-sensitive.<br>");
        document.write("e) Variable names should not be JavaScript reserved keywords.");


            // Chapter Number 04 Close Here


            //Chapter Number 05 Start Here

// Qno01.Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.            


var num1 = 8
var num2 = 15
var add = "8 + 15 ="
var numSum = num1 + num2

document.write(`<h1>${add} ${numSum}</h1>`)

// Qno02.Repeat task1 for subtraction, multiplication, division &
// modulus.