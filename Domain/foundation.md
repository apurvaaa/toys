[TOC]

# Domain Foundational

## JS Variables - let/const/var

### Variable

A variable refers to an identifier that can have different values assigned or stored in it. In simple words, it is something that can vary or change. 



For example - our age is variable. It keeps on changing throughout our life. A variable can store different kinds of values in it. In the js code given below -

```js
let x = 10; // x is a variable that holds the value 10.

x = “IK”; // Now x holds the value - “IK”



let gender;  // Here, we have declared a variable named “gender”

gender = “F” // Here, we have assigned the value “F” to the gender variable



let name = “Bolt”, age = 34, gender = “M”;

//In the above statement, we have declared three variables and assigned values to them.



var costPrice = 100;

costPrice = 300;
```

### Constant

A constant refers to a variable whose value cannot be modified. If we try to modify it, the JS engine will throw a Type error and will not allow us to do that.



For example - 

```js
const student = ‘Ronaldo’;

student = ‘Messi’;

//Uncaught TypeError: Assignment to constant variable.
```

### Let and Const - keywords used to define variables

The keyword “let” is used to define variables (whose values can vary). For example - in the following code snippet numA and numB both are variables.

```js
let numA = 10;

let numB = 20;

let numC = numA+numB;

numC = numC - numA;  // In this line, variable numC is reassigned a new value.

The keyword const is used to define constants (variables whose values cannot be changed). For example -



const RADIUS_OF_EARTH = “6378”;

const PI = “3.14”;

const US_INDEPENDENCE_DAY = “4th July”;

const sunriseTime = “6:45am”; // This will not change on a day.
```

### var keyword(old way)

Prior to ES6, we used the “var” keyword to declare variables. **var** is used to declare global or functional-scoped variables. (It will be covered in more detail later in the **scope** section)

> Note: If a variable is not assigned a value, its value is **undefined** by default. For example -: 
>
> let xmen; // here the value of xmen is “undefined”;
>
> xmen = “Wolverine”; // now the value changes from undefined to wolverine.



## Switch Syntax and Switch while true

The switch statement is used to execute a block of code when a particular condition matches. It can be used to replace multiple if statements or if-else if statements. Let’s see with an example. 

```js
let bonus=getBonus(employee); // getBonus() takes employee as a param and returns bonus



switch(bonus){

	case 5:

					console.log(“ I got ”+bonus+” amount as bonus”);

					break;

	case 10:

					console.log(“ I got ”+bonus+” amount as bonus”);

					break;

	default:

					console.log(“ I got no bonus”);

					break;
}
```

### Key points Switch/case

- The variable bonus is compared strictly(===) with the case values meaning 5 is equal to 5 but 5 is not equal to ‘5’
- When the value of the bonus does not match any case statement, then the default block will execute.
- If we omit the break statement, then it will execute all following case blocks(without checking for a match) until a break statement is encountered or default is reached.
- The values in switch and case can be any expression. (It's not required to be a fixed value like ‘ryan’ or 10 etc). If we see expressions in switch and case, they get evaluated first and then strictly compared against each other. 
- default is optional, and you can omit it. Putting multiple default cases will throw an error.

### Expression Example

```js
switch( "ryan".includes("ya") ){  // "ryan".includes("ya") is evaluated & compared to true/false

case true: 

console.log(“Yey! True”);

break;

case false:

console.log(“Booo! False”);

break; 

}



// or it can also be written as - 



switch(true){  

case true: 

console.log(“Yey! True”);

break;

case false:

console.log(“Booo! False”);

break; 

}
```

## ES6 Arrow function syntax

ES6 introduced a new simple and handy way of writing a function expression. Let's take a look - 



In ES5 we defined a function with function keyword like this -

```js
let calculateTotalSales = function(){

	let allSales = [10,40,50,90];

	let total = 0;

	for(let i=;i<allSales.length;i++){

		total = total + allSales[i];

	}

	return total;

}
```

The same function can be defined using ES6 arrow function like this -

```js
let calculateTotalSales = ()=>{

	let allSales = [10,40,50,90];

	let total = 0;

	for(let i=;i<allSales.length;i++){

		total = total + allSales[i];

	}

	return total;

}
```



Another example -



`let logIt = (arg1) => console.log(arg1);`



If the function has only one line, then we don’t need to put the curly braces. Single line functions return the output of that line or undefined. If its a multiline function, then we have to put curly branches and put a return;



```js
let multiplyBy2 = (num) => num*2; // No explicit return statement but it returns num*2



let addAll = (numArray) =>{

let total = 0;

for(let i=;i<numArray.length;i++){

total = total + numArray[i];

}

return total; // explicit return is required if we omit ‘return’ undefined is returned back. 

}
```

### Key difference ES6 ES5

In javascript, **‘this’** is dynamic, and its value depends on how the function was invoked or can be set explicitly using **call**, **apply** or **bind**. (We will read about this later in the course)

```js
function DelayedPrinter (delay){

	function innerHelper(){

		console.log(this===window);

	}

	innerHelper();

}

new DelayedPrinter();



//Output => true
```



NOTE : The above code snippet will print **true** because the *innerHelper* is invoked in a normal way. 



If we use arrow syntax to define the inner function, then **“this”** inside the innerHelper will point to the DelayedPrinter object, not the Window object. See below -> 

```js
function DelayedPrinter (delay){

  innerHelper=()=>{ // innerHelper declared using arrow function

		console.log(this===window);

	}

	innerHelper();

}

new DelayedPrinter();



//Output => false
```

Inside arrow functions, this takes its value from the outer function. 



**Let’s see one more example -** 



![img](/Users/apurva.vijaya/Dev/toys/Images/domain1.png)



In the greetKids function in SNIPPET 1, we have to do *_self = this* so that we can refer to the employee object in the forEach loop. This is kind of ugly. 



We have achieved the same behavior using the arrow function in SNIPPET 2. Here, this inside forEach points to the employee object because **this** in arrow function takes its value from the outer function.



### Key difference Arrow function, normal function

![img](/Users/apurva.vijaya/Dev/toys/Images/domain2.png)

![img](/Users/apurva.vijaya/Dev/toys/Images/domain3.png)



## Destructuring Assignment - Object and Arrays

Objects and Arrays are fundamental and most commonly used data structures in javascript. We pass data from one part of the program to another using these. 



Destructuring means to extract values out of these data structures and assign it to variables without looping over them. For example -



**For Arrays**

*let [name, age, height] = [“Ryan”, 35, 185];*

*console.log(name, age, height); // Ryan, 35, 185.*



In the above snippet, name, age and height variables are assigned 1st, 2nd and last value in the array.



*let [name, age, height=170] = [“Ryan”, 35];*

*console.log(name, age, height); // Ryan, 35, 170.*



NOTE -> In the above snippet, the right hand side array has only two values and hence height will be assigned its **default value** of 170.



*let [name, age, height=170] = [“Ryan”, 35, 160];*

*console.log(name, age, height); // Ryan, 35, 160.*



Here, height will not be assigned its default value as there are three values present in the right hand side array.





**For Objects** 



let {name,age,height} = {name:’Ryan’, age: 35, height: 185};

console.log(name, age, height);



In the above snippet, name, age and height variables are assigned values of keys - name, age and height. The right hand side should be an instance of an object and must have keys which we are trying to extract. If the right hand side object does not have a key then undefined is assigned.



let {name,age,height} = {name:’Ryan’, age: 35};

console.log(name, age, height);  // Ryan, 35, undefined



let {name} = {name:’Ryan’, age: 35};

console.log(name); // Ryan



Here we are extracting name property form the object without touching everything else.

### Spread Operator

Spread operator is used to create copies of objects and arrays without using Object.create or any other method. Lets see with an example -



**For copying arrays** 



let prepTopics = [‘js’,’html’];

let latestPrepTopics = [...prepTopics, ‘css’];

console.log(latestPrepTopics); [‘js’,’html’,’css’]



let num = [5,2,8,9,19,200,12,434];

let max = Math.max(...num);

console.log(max); // 434



*Note -> If we pass num directly into the Math.max function, it will throw an error. This is where the spread operator comes in handy as it will expand the array items into a list of arguments.*



**For objects** 



let person = {name:’Ryan’};

let augmentedPerson = {...person, age:35, height:185};

console.log(augmentedPerson); // {name:’Ryan’,age:35, height:185 };



**Key Points to note -** 

- The right-hand side array remains intact. Only its values are copied to variables on the left-hand side of the assignment operator.
- Destructuring works for any iterable (not just an array). For example - Set, Map, Object.Entries etc.
- We can extract items depending on our needs. For example - let [a,b]=[1,2,3,4] will assign 1 to a and 2 to b and ignore 3 and 4. If we want to get the remaining items as well we can use “...” like this - let [a,b, ...nums] = [1,2,3,4,5]. Here nums will point to a new array having 3,4,5. (num = [3,4,5])
- The left side has to have the same structure as the right-hand side for extracting values from a nested object. For example -





*![img](/Users/apurva.vijaya/Dev/toys/Images/domain4.png)*

### Rest operator

If we want to take out a few items from an array or an object, we can make use of … Lets see an example -



let [a,b,...nums]=[1,2,3,4,5,6,7];

console.log(a,b,nums); // 1,2, [3,4,5,6,7]



Here we are extracting the first two values in *a* and *b* and assign the rest of the array items to *nums* variable



Same goes for objects as well -



let {name,...remaining} = {name:’Ryan’, age: 35, height:185, gender:’M’};

console.log(name, remaining); 



Here we are extracting name property from the object and assigning everything else as an object to the remaining variable.



*remaining = {*

*age:45,*

*height:185,*

*gender:’M’*

*}*



## ES6 for...of statement

For...of statement can be used to iterate over an Iterable ( Array, String, Map, Set, arguments, NodeList etc.) 



**Iterating over a NodeList** 



*let paragraphs = document.querySelectorAll(‘p’); // Select all paragraphs from the document*



*// Type of paragraphs is an object. It's a NodeList object.*

*for(let para of paragraphs){*

*console.log(para); // this will print all paragraphs one by one.*

*}*



**Iterating over arguments** 



*function addAll(){*

*let total = 0;*

*for(let num of arguments){ // Note that arguments is not an array.*

*total = total + num;*

*}*

*console.log(total);*

*}*

*addAll(1,2,3,4,5);*



let and const can be used to assign the value of property to a variable.



*for(****const\*** *name of [‘Ryan’,’Tony’] ){*

*console.log(name);*

*// name = ‘Mr’ + name; (This line will throw an error with const)*

*}*



Note -: Assigning another value to name will throw an error in case of const. 



### Difference between for...of and for...in

for … in loop logs all the **enumerable properties** of an iterable. It does not touch the values of the iterable. On the contrary the for … of loop helps in iterating over the values of the iterable.





**![img](/Users/apurva.vijaya/Dev/toys/Images/domain5.png)**

## ES6 Set, Map, WeakMap and legacy array/object

We had Objects and Arrays in javascript which were used to hold items based on keys and ordered items respectively. In ES6, few new data structures were introduced that are very helpful in reducing the complexity and quantity of the code which we have to write to achieve as developers.

### Map

Map is a collection of key value pairs, similar to objects. The difference between Map and Object is that an Object can only have strings as key on the other hand a Map can have any data type as key.



![img](/Users/apurva.vijaya/Dev/toys/Images/domain6.png)





NOTE -> If we try to use any other data type as a key in an Object, it will be converted to a string first and then used as a key in the Object. In the above code snippet, 100 is converted into ‘100’ before setting it as a key in the person object.



On the other hand, personMap has both 100 and ‘100’ as keys. Maps can have data types as keys like - number, boolean, Object etc.



We can use for..of loop to iterate over a map, has() to check for existence of a key and get and set methods to get & set values in a map. 



Also, keys() and values() methods can be used to enumerate over keys and values.

### Key difference Object and Map

![img](/Users/apurva.vijaya/Dev/toys/Images/domain7.png)

### Weak Map

WeakMap stores additional data of an object without modifying the object itself or attaching new properties to it. Also, it does not create Memory leaks as the keys in WeakMaps are loosely held meaning as soon as the object is garbage collected the object is automatically removed from the WeakMap as well.





![img](/Users/apurva.vijaya/Dev/toys/Images/domain8.png)



In the above code, if we had used Map instead of WeakMap it would have resulted in memory leak. The Map data structure will always keep a reference to a person object (not allowing it to be garbage collected) until we delete the key from the Map object.



WeakMaps can be used for caching results, storing additional data related to DOM elements. For example - How many times a particular button has been clicked in a session? As soon as the button is removed from the DOM, its reference is deleted from weakmap as well.

### Key Difference between Map and Weak Map

![img](/Users/apurva.vijaya/Dev/toys/Images/domain9.png)

### Set Data Structure

In mathematics, Set is a collection of unique items. The same concept is ported to javascript. It contains a set of values without keys. You can think of it as an array having unique values and some methods to access and delete values from it. 



let peopleSet = new Set([‘Ryan’, ‘Tony’, ‘Williams’]);

peopleSet.has(‘Ryan’); // O(1)



We can use Set data structure in situations where we need to detect duplicates efficiently. For example - Count number of visitors on a site, do not allow items with the same title in a todo list application etc.

## Events in JS and the Event Stack

Javascript follows an event driven programming model regardless of it running in the browser, on a mobile device or on a server. Events are actions that happen in the browser and web page like - click of a button, pageload, image load, script load, etc. There are different kinds of events like keyboard events, mouse events, scrolling, resizing, loading etc.



We as JS programmers would like to respond to these events and take actions according to our application needs. For example - Submit a form on click of a button.



We can respond to events by adding event listeners to these events.

```js
let button = document.querySelector(‘#submitButton’);

button.onclick = (e)=>{

	alert(‘Submit button clicked’);

}
```



We can trigger multiple event handlers for an event. The following snippet will add two listener functions to load events.

```js
function log1(e){

	console.log(‘1’);

}

window.addEventListener(‘load’, log1);



window.addEventListener(‘load’, (e)=>{

	console.log(‘2’);

})
```



We can remove event listeners if we are no longer interested in a particular event by using removeEventListener method.



`window.removeEventListener(‘load’, log1);`



***Note - In the above snippet, we have removed only one event listener. It will still print 2 on the window load event.\***



The event listener gets an event object which can be used to get important information about the event like target, event name, etc. It also has some important methods which can be used to prevent the default action, stopping propagation of event etc



An event always propagates to its parent and will trigger the parent’s event handler as well. For example - 



<ul>

<li> 1</li>

<li>2</li>

</ul>



Suppose we have a click listener attached to both li tag and its parent (ul) tag. When a user clicks 1, it will trigger both the click listener. The order in which these listeners will fire depends on bubbling or the capturing phase. 



In the bubbling model, the listener attached to the child will fire first and after that the parent’s listener will fire. In the capturing phase, the parent's event listener will fire before the child's listener. By default, it will follow the bubbling model.



stopPropagation method is used to prevent an event from bubbling. For example -



<ul>

<li id=’one’> 1</li>

<li>2</li>

</ul>

```js
let childListener = document.querySelector('#one’);

childListener.onclick= (event)=>{

event.stopPropagation();

}
```



In this case, the event will not bubble up and as a result, the parent's listener will not fire.

### Single Threaded Nature of JS

Javascript is single threaded meaning there is only one thread which executes the script. All statements will be executed line by line in a sequence. This means that javascript cannot execute the next statement until the current one is done. *This makes JS calls **blocking and synchronous**.* 



let price = calculatePrice(); 

alert(price);



Suppose the calculatePrice function takes 5s, then we will raise the alert after 5 seconds and nothing else will execute till the program is calculating price. 



Fortunately, there are ways to schedule asynchronous work (which can happen in parallel). 



setTimeout(()=>{

alert( calculatePrice() );

},2000)

console.log(“Calculating Price ….”);



In the above snippet, javascript will encounter the setTimeout call and will schedule the callback function to execute after 2 seconds and will carry on to print “Calculating Price … ”. After 2s, js will calculate the price and alert it.



Methods like setTimeout, setInterval etc, helps in scheduling work for later, allowing javascript to continue to execute next lines.



Let’s look at the following snippet and how it will be executed by javascript.

```js
console.log(‘A’); // Line1

setTimeout(()=>{ // Line2

	console.log(‘B’);

},100);





setTimeout(()=>{  // Line3

	console.log(‘C’)

},0);

console.log(‘D’); // Line4
```

Javascript will execute line 1 and log A, then it will execute line 2 and schedule the callback for evaluation in the future (after 100ms), then it will execute line 3 and schedule this callback for execution immediately after it finishes running the current function, and at last it will execute line 4 and print D.



Output will be -



A

D

C

B



Let’s look at scheduling in more detail in the next section.

## SetTimeout, setInterval and process.nextTick

Javascript is event driven and sometimes we may want to execute certain tasks at a later point of time. This is known as scheduling and there are two ways in which we can schedule a function for execution at a later point of time. 

### Set Timeout

setTimeout is used to execute a function after x number of milliseconds. 



*let timerId = setTimeout(()=>{*

*console.log(“My name is Ryan”);*

*}, 5000);*



Above code will log “My name is Ryan” to the console after 5 seconds. First argument to the setTimeout is a function or piece of code which we want to execute at a later point of time and the second argument is delay in milliseconds. (5000milliseconds -> 5 seconds). 



Note -: The default value of second argument is 0



setTimeout returns a timerId which can be used to cancel the scheduled execution using the clearTimeout function. For example - If we want to cancel the above execution we can use the following snippet -



`clearTimeout(timerId)`

### setInterval

setInterval method is used to execute a code snippet or a function with a fixed time delay between each call. For example - If you want to notify a user about pending items in his cart after every 5 minutes you can use setInterval.



*function remindUserAboutCart(){*

*alert(‘You have items in the cart’);*

*}*

*let intervalId = setInterval(remindUserAboutCart, 1\*1000\*60\*5);* 



We can use the interalId to clear the function execution using the clearInterval function.



`clearInterval(intervalId);`



![img](/Users/apurva.vijaya/Dev/toys/Images/domain11.png)

![img](/Users/apurva.vijaya/Dev/toys/Images/domain10.png)

### Task

T1. Implement setInterval functionality using setTimeout.



T2. Implement a timer having start, pause and reset, play features. 

Start : It will start counting time upwards in seconds starting from 0 second.

Pause : It will pause the timer.

Reset : It will reset the timer to 0.

Play : It will start the counting time upwards from its previous value.

### process.nextTick

process.nextTick is available in the nodejs environment. Similar to setTimeout, it is used to execute a code snippet of a function in the next iteration of the event loop. 

The main difference is that the callback provided to process.nextTick adds itself to the front of the event queue. It will execute after the currently running code but before any timers or I/O calls. 



Note -> The execution order is process.nextTick -> Timers 



![img](/Users/apurva.vijaya/Dev/toys/Images/domain12.png)



Here’s the output of the above snippet -



*Checking the execution order. 1* 

*Checking the execution order. 2* 

 *Next Tick*

 *Timeout*

## Scoping and execution context

Javascript has **‘this’** keyword. It is used to access the object and its properties. Let’s see an example -

```js
let personOne = {

	name:’Ryan’,

	age:18,

	introduce:function(){

		console.log(‘Hi! My name is ’+this.name+” and I am ”+this.age+’ years old.’);

	}

}



personOne.introduce();
```



**‘this’ keyword is used to access properties of an object within its methods.** ‘this’ always points to an object. 



It's important to deeply understand what this points to in different context. For example -

*function calculatePrice(){*

*console.log(this);*

*}*

*console.log(calculatePrice());*



Inside the calculatePrice function, this is pointing to global object (points to window object in case this is ran within browser environment)



Understanding how **‘this’** works and what it points to in different situations is key to master javascript programming. But before we understand ‘this’, we need to master execution context and scope.



Each javascript line is executed in a scope. It can be a global scope or a function scope. The value of ‘this’ keyword changes the basis which line is being executed. For example -



*function calculatePrice(){*

*console.log(this);*

*}*

*console.log(calculatePrice());*



Here calculatePrice function is executed in global context and that’s why this inside the function refers to a global object. (In strict mode, it refers to undefined)



**The call to \*calculatePrice()\* is actually global.calculatePrice() (where global is Window in the browser environment). All methods are always called on an object, and here the object is a window object by default.**



Let’s look at the following example -



*let personOne = {*

*name:’Ryan’,*

*age:18,*

*introduce:function(){*

*console.log(‘Hi! My name is ’+this.name+” and I am ”+this.age+’ years old.’);*

*}*

*}*



*personOne.introduce(); // introduce is called in the context of personOne.*



**Note** - Here the introduce method is called with personOne context and hence inside it, this refers to personOne. 







Let’s see another case -



let name = ‘Tony’;

let age = 40;

*let personOne = {*

*firstName:’Ryan’,*

*age:18,*

*introduce:function(){*

*console.log(‘Hi! My name is ’+this.firstName+” and I am ”+this.age+’ years old.’);*

*}*

*}*

let globalIntroduction = personOne.introduce;



console.log( globalIntroduction() ); // Hi! My name is undefined and I am undefined years old



Both this.firstName and this.age are undefined because globalIntroduction points to the introduce function and its being called without a context(object). So by default it takes global object as context.



Note - Whenever we do a normal function call (without invoking it on an object), ‘this’ always refers to a global object.



Let’s look at an intriguing example -



![img](/Users/apurva.vijaya/Dev/toys/Images/domain13.png)





Here’s the output of the above snippet. 



This car is owned by Ryan and is of Tesla brand. // First console.log

This car is owned by undefined and is of undefined brand. // Details’s -> console.log



Explanation -> In the first console.log ‘this’ keyword is pointing to a car object. The details function is called without any context and it's a normal function call so ‘this’ inside the details function points to a global object. (which is Window in case of a browser)

### 'this' in constructor

We can also create objects using the new keyword. ‘this’ inside the constructor points to a newly created object. Let’s see -



function Car(brand, owner){

this.brand = brand;

this.owner = owner;

this.toString = function(){

console.log(“ This car is owned by ”+this.owner+’ and is of ’+this.brand+’ brand’);

}

}



Let car = new Car(‘Tesla’, ‘Ryan’);

car.toString();



‘this’ inside the Car constructor points to a new object and arguments brand, owner gets assigned as two properties on this newly created object. Look at the following code to see what happens behind the scenes.



function Car(brand, owner){

**// this = {}; (JS creates a new object and assigns to ‘this’)**

this.brand = brand;

this.owner = owner;

this.toString = function(){

console.log(“ This car is owned by ”+this.owner+’ and is of ’+this.brand+’ brand’);

}

**// return this; ( returns the newly(behind the scenes) created object)**

}



Let car = new Car(‘Tesla’, ‘Ryan’);

car.toString();

### Modifying 'this' via cal, apply and bind

We can modify the value ‘this’ points to via function methods like call, apply and bind. Lets look at them one by one -



Bind Method



It lets us bind a function to an object, meaning it sets this keyword to a provided value. Let us see an example - 







*![img](/Users/apurva.vijaya/Dev/toys/Images/domain14.png)*





Bind method returns a new function bound to an object. Here, we took *introduce* method from personOne and called bind on it with personTwo as an argument which returned a new function (whose this refers to personTwo object) Hence, globalIntroduction is bound to personTwo object.



Now whenever globalIntroduction is called, it will use personTwo as this and its firstName and age properties. 



Note - If you notice closely, globalIntroduction is called in the global context and still this within it refers to personTwo.

### Call Method

The call method help us in calling a function with a specified value and other arguments as parameters. Lets see this with an example - 

```js
let objA = {

	age:12

}

let objB = {

	age:15

}



function tellAge(){

	console.log(this.age);

}



tellAge(); // undefined

tellAge.call(objA); // 12

tellAge.call(objB); // 15
```



First call to tellAge logs undefined because its called with global context and this refers to window object.



In the second line, we are invoking the tellAge function passing objA as a parameter which sets the this value to objA inside the tellAge function and hence resulting in 12 as output.



In the third line, we are invoking the tellAge function passing objB as a parameter which sets this value to objB inside the tellAge function and hence resulting in 15 as output.



Note - ***call accepts other arguments as comma separated values.***

 ```js
 function sumAll(a,b,c){
 
 	return this.initialValue + a+ b+ b;
 
 }
 
 let obj = {
 
 	initialValue:10
 
 }
 
 console.log(sumAll.call(obj,20,30,40)); // 100
 ```

### Apply method

This is similar to call, ***the only difference being that it accepts arguments as an array.*** 

```js
function sumAll(a,b,c){

	return this.initialValue + a+ b+ b;

}

let obj = {

	initialValue:10

}

console.log( sumAll.apply( obj, [20,30,40] ) ); // 100
```



Note - call, apply and bind methods are present on all functions.

### Arrow function and this

Arrow function was introduced in ES6. As discussed earlier, arrow functions do not have their own ‘this’. They get value of this from their lexical scope meaning the position at which they were written in the code. Let’s see with an example -

```js
let delay = {

	delayBy:2000,

	delayLog: function(){

		setTimeout(function(){

			console.log('This is delayed by '+this.delayBy);

		});

	}

};

delay.delayLog(); // This is delayed by undefined
```



this.delayBy is undefined inside the callback because it’s called like a normal function without any context and hence this refers to a global object inside the callback. 



Let’s see how arrow functions help us here -



let delay = {

delayBy:2000,

delayLog: function(){

setTimeout(()=>{ // arrow function shares this from outer function.

​     console.log('This is delayed by '+this.delayBy);

​    });

   }

};

delay.delayLog(); *// This is delayed by 2000*



Arrow functions share ‘this’ with the outer function. So ‘this’ in delayLog is a delay object and hence the same is being used inside the arrow function. 



Note - *We don’t have to resort to tricks like ‘let _self=this’ or ‘let that = this’ to access this inside the inner function.*



What about the following snippet?

```js
let delay = {

delayBy:2000,

delayLog: ()=>{

	setTimeout( () => {

     console.log('This is delayed by '+this.delayBy);

		});

  }

};

delay.delayLog(); // This is delayed by undefined
```



*WHY?* 

Here this.delayBy refers to ‘this’ from the outer function delayLog and ‘this’ in delayLog function refers to global object (window in case of browser) and hence this.delayBy (window.delayBy) is undefined.

## Closures

A closure is formed when we have a function defined inside another function. The inner function has access to all the variables defined in the outer function even after the execution of the outer function. 



*let suffix = '. How are you?';*

*function greet(){*

*let greeting ='Hello ';*

*return function(name){*

*console.log(greeting+name+suffix);*

*}*

*}*

*let greetNow = greet();*

*greetNow('Ryan'); // Hello Ryan*



Here, the anonymous function returned by greet closed over the greeting variable. Even though the greet function has finished execution, the greeting variable is still available for use in anonymous functions.



Closure has access to all variables in local scope, parent scope, and global scope. 



The anonymous function has access to the *greeting* variable from **parent** **scope** and *suffix* variable from the **global scope**.

## IIFE - Immediately Invoked Function Expressions

IIFE is one of the most common design patterns in javascript. It is also known as self executing anonymous function. It is immediately invoked after the definition. 



Let us see an example -



*let myconsole = ( function (){ // Anonymous function (as it does not have a name)*



*function log(message){*

*console.log(message);*

*}*



*return {*

*logIt : log*

*}*



*} )(); // Invoked Immediately after declaration*



*myconsole.logIt('My custom logger');*



Let’s see another way of creating an IIFE.



!function(){

*function log(message){*

*console.log(message);*

*}*

*log(‘ This is another way to write IIFEs’).*

}();



Here, the ! operator makes it a function expression instead of a function declaration. We can use other unary operators like ‘+’, ‘-’ etc as well as void to create IIFE. 



*void function(){*

*function log(message){*

*console.log(message);*

*}*

*log(‘This is another way to write IIFEs’);*

*}();*



Note - Use unary operators and void only when you are not returning anything from the IIFE.

### Private variable with IIFE

In javascript, we do not have a concept of public and private variables. Variable visibility depends on its scope - global, functional, block, etc.



IIFE allows us to create a function scope for variables. Any variable defined inside the IIFE is not visible to the outside world. Let us see with an example -



(function(){

var firstName = ‘Ryan’;

var lastName = ‘Williams’;

function startGame(firstName, lastName){

// logic

}

startGame();

})();

console.log(firstName, lastName, startGame); // undefined, undefined, undefined



Here, firstName, lastName, and startGame are not visible outside as they are created inside IIFE. 



Let’s see couple more examples -



![img](/Users/apurva.vijaya/Dev/toys/Images/domain16.png)





Here, we created two private variables (students and courseName) and exposed functionality based on them.





We can use IIFEs and closures to implement the Singleton pattern in javascript -



![img](/Users/apurva.vijaya/Dev/toys/Images/domain15.png)



