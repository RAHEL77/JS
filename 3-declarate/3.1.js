  /*
                              JavaScript - Declaring Functions
                              The following exercise contains the following subjects:
                                  * functions
                              
                              Instructions
                                  * Please reformat the following function declarations to function expression.
                                  * Please reformat the following function expressions to function declarations.
                              Submit the file to Hive
                          */

  // From function declarations to function expressions
  function welcome() {
      let welcome = 'Welcome to Appleseeds Bootcamp!';
      return welcome;
  }
  //**expression
  let welcome = function() {
          return 'Welcome to Appleseeds Bootcamp!';
      }
      //**arrow
  welcome = () => 'Welcome to Appleseeds Bootcamp!';

  //-----------


  function power(a) {
      let myNumber = a;
      let result = Math.pow(myNumber, 2);
      return result;
  }
  //**expression
  let result = function(a) {
          return Math.pow(myNumber, 2);
      }
      //**arrow
  result = (a) => Math.pow(myNumber, 2);
  //------

  function add(a, b = 5) {
      let myNumber = a;
      let sum = myNumber + b;
      return sum;
  }
  //*expression
  let sum = function(a, b = 5) {
          return myNumber + b;
      }
      //*arrow
  sum = (a, b = 5) => myNumber + b;

  // From function expressions to function declarations
  const hello = () => "Hello!";
  //declarate
  function hello() {
      let hello = "Hello!"
      return hello;
  }
  //----
  const squareRoot = a => Math.sqrt(a);

  function root(a) {
      let squareRoot = Math.sqrt(a);
      return squareRoot;
  }

  //----
  const randomNumbers = (a, b) => Math.random() * (a - b) + b;

  function nums(a, b) {
      let randomNumbers = Math.random() * (a - b) + b;
      return randomNumbers;
  }