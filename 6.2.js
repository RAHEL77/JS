   const people = ["Greg", "Mary", "Devon", "James"];

   People();

   // 1. Using a loop, iterate through this array and console.log all of the people.
   function People() {
       for (let index = 0; index < people.length; index++) {
           element = people[index];
           console.log(` ${element} `);
       }
   }

   // 2. Write the command to remove "Greg" from the array.
   people.shift();
   // 3. Write the command to remove "James" from the array.
   people.pop();
   // 4. Write the command to add "Matt" to the front of the array.
   people.unshift('Matt');
   // 5. Write the command to add your name to the end of the array.
   people.push('Rachel');


   // 6. Using a loop, iterate through this array and after console.log-ing "Mary",
   // exit from the loop.
   function People() {
       for (let index = 0; index < people.length; index++) {
           element = people[index];
           console.log(` ${element} `);
           if (people[index] == "Mary")
               break;
       }
   }
   const people = ["Greg", "Mary", "Devon", "James"];
   People();


   // 7. Write the command to make a copy of the array using slice. The copy
   // should NOT include "Mary" or "Matt".
   const people = ["Matt", "Greg", "Mary", "Devon", "James"];
   const p2 = people.slice(1, 2);
   console.log(p2);
   const p3 = people.slice(3);
   console.log(p3);
   const p4 = p3.concat(p2);
   console.log(p4);
   // 8. Write the command that gives the indexOf where "Mary" is located.
   people.indexOf("Mary");

   // 9. Write the command that gives the indexOf where "Foo" is located (this
   // should return -1).
   people.indexOf("Foo");


   // 10. Redefine the people variable with the value you started with. Using the
   // splice command, remove "Devon" from the array and add "Elizabeth"
   // const people = ["Greg", "Mary", "Devon", "James"];
   // and "Artie". Your array should look like this when you are done ["Greg",

   // "Mary", "Elizabeth", "Artie", "James"].
   const people = ["Greg", "Mary", "Devon", "James"];
   const a = people.splice(2, 1);
   console.log(a);
   //[ 'Devon' ]
   console.log(people);
   //[ 'Greg', 'Mary', 'James' ]
   people.splice(1, 0, "a", "b");
   console.log(people);


   // 11. Create a new variable called withBob and set it equal to the people
   // array concatenated with the string of "Bob".
   // Submit the file to Hive.
   const withbob = people.concat("bob");
   console.log(withbob);