
Here are some examples of JavaScript Variables:

var greeting = 'Hello, OM!';              // a String
var year = 2015;                          // a Number
var pi = 3.14159;                         // a Number
var completed = false;                    // a Boolean (can be true or false)
var fruit = ['Apple', 'Orange', 'Banana'] // an Array
var person = {                            // an Object
    firstName: 'Homer D.',
    lastName: 'Poe'
};
var fullName = person.firstName + ' ' + person.lastName;

__________________________________________________________________________

2.4. Semicolons
        It is good practice to end every statement with a semi-colon.

            Statements are lines of code that do actual work:

        JavaScript

        var x = 3;     // a declaration statement
        x = x + 1;     // an assignment statement
        if (x > 10) {  // control flow, not a statement
            console.log('x is big');  // a statement for writing to the console.
        }              // end of if block, not a statement.


__________________________________________________________________________

3.1. Primary Data Types


        String

            A sequence of characters

            "Hello", 'goodbye', '123'

        Number

            An integer or floating point number

            23, 3.14, -17

        Boolean

            A true or false value

            true, false

__________________________________________________________________________

3.2. Composite (Reference) Data Types


        Array

            A indexed list of values

            [1, 2, 3], ['apple', 'orange', 'banana']```
            
            
        Object
        
            A collection of properties where each property is an association between a name (or key) and a value.
        
                {
                  name: 'Mike',
                  age: 29,
                  hobbies: ['drums', 'cycling', 'photography']
                }
        
__________________________________________________________________________
    
3.3. Special Types and Values
        JavaScript supports the following special types and values:
        
        Table 3. Special Types and Values
        Value	Description
        
        undefined
        
            A variable that has not been assigned a value is of type undefined
        
        null
        
            This value represents the intentional absence of a value (a value has not yet been determined).
        
        NaN
        
            NaN means Not a Number. This value results from mathematical operations that result in a mathematical error, for example 3 / 'hello'.
        
        Infinity
        
            A numeric value that is too large to represent, for example 3 / 0.
            
        var x = null;         // the value of x is null
        var y;                // the value of y is undefined
        var z = 3 / 'hello';  // the value of z is NaN
        var w = 3 / 0;        // the value of w is Infinity

__________________________________________________________________________

4.3. Strings and String Operations
        String literals can be written with single quotes or double quotes:
        
        JavaScript
        1
        2
        var city = 'Atlanta';    // single quotes
        var state = "Georgia";   // double quotes
        Strings have a set of properties and methods that can be used to get information about the string, get parts of the string, or manipulate the string in some way:
        
        JavaScript
        
        var greeting = 'Hello, OM!';
        greeting.length;                    // 10
        greeting.charAt(0);                 // 'H'
        greeting.charAt(5);                 // ','
        greeting.indexOf('O');              // 7
        greeting.substring(7, 9);           // 'OM'
        greeting.toLowerCase();             // 'hello, om!'
        greeting.toUpperCase();             // 'HELLO, OM!'
        greeting;                           // 'Hello, OM!' (has not changed)
    
    
JOINING STRINGS
    
    var city = 'Atlanta';
    var state = "GA";
    var zipcode = '30308';

    var address = city + ', ' + state + ' ' + zipcode;  // 'Atlanta, GA 30308'

__________________________________________________________________________
    
4.5. Boolean Expressions
A boolean value can be either true or false.

Boolean values can be combined using the logical operators && (AND) and || (OR).

The boolean ! (NOT) operator will invert the boolean value.

The order of boolean operator precedence is:

!

&&

||

JavaScript
 
var a = 3;
var b = 5;
var c = -12;
var x = a < b;   // true
var y = c > 0;   // false

!x               // false
x && y           // false
x || y           // true
x && !y          // true

 __________________________________________________________________________
 
 5. Type Casting and Type Coercion
 
 
Sometimes we need a variable of one type to be converted into a different type (usually inside of an expression). 
The conversion can either be explicit (casting) or implicit (coercion).

Casting - the code explicitly convert a variable into a different type.

Coercion - the JavaScript runtime converts the variable into a different type in an attempt to evaluate an expression that needs the data to be in the new type.

// type casting - explicit
var n = Number('123');    // cast a string to a number
var s = String(456);      // cast a number to a string
var b = Boolean('');      // cast a string to a boolean (follows the rules of truthy/falsey)

console.log(n, s, b);

var n2 = +'-123';         // coercion to Number to satisfy the unary \`+\` operator
var s2 = '' + 456;        // coercion to String to satisfy the binary \`+\` operator with a string on the LHS
var b2 = !!'';            // coercion to Boolean to satisfy the logical NOT operator

console.log(n2, s2, b2);

var b3 = -1;              // try different values here
var b3AsABoolean = !!b3;
if (b3) {
	console.log('b3 is truthy');
}
else {
	console.log('b3 is falsey');
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
