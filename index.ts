//........................UNION TYPE..............................


                              //defination...1...
//Union type in TypeScript allows you to specify that a variable can have multiple types. you can think of it as "ek variable jo kai mukhtalif qisam ke values qabool karta hai.

//Union Types : TypeScript mein union types ka istemal karte hain jab hum ek variable ya parameter ko do ya zyada mukhtalif types mein define karna chahte hain. Hum | (line) ka istemal karte hain union type ko define karne ke liye.


                               //defination...2...
// Union types in TypeScript allow you to define a type that can hold values of multiple specified types. It's like saying that a variable can be of type A or type B or both. 

// TypeScript mein union types istemal kar ke aap ek variable ko multiple types ke values hold karne ki permission dete hain. Yani ke aap keh rahe hain ke ek variable ya to type A ka ho sakta hai, ya type B ka, ya dono ka. Yahan ek asan example hai:

// ...........................Example.....................

// Imagine you have a variable result that can store either a number or a string. You can define this variable with a union type number | string. This means result can be assigned a value of type number or string. Here's how you can use it

let result: number | string|boolean;

result = 10; // Valid, result is now a number
console.log(result); // Output: 10

result = "Hello"; // Valid, result is now a string
console.log(result); // Output: Hello

result = true; // Error: Type 'boolean' is not assignable to type 'number | string'



