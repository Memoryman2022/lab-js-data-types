/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const result1 = s1 + " " + s2 +" "+ s3 +" "+ s5 +" "+ s4

// Print out the concatenated string
console.log(result1);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const upper1 =  part1.slice(0, 3) + part1[3].toUpperCase()
const upper2 =  part2.slice(0, 5) + part2[5].toUpperCase()
const result2 = upper1 + upper2
// Print the cameLtaiL-formatted string
//console.log(result2)



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tip = 15 / 84 * 100
tip = Math.floor(tip)
// Print out the tipAmount
//console.log(tip)




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let ranNum = Math.floor(Math.random() * 11)
//let wholeNum = Math.floor(ranNum)
// Print the generated random number

//console.log(ranNum)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//false
const expression2 = a || b;
//true
const expression3 = !a && b;
//false
const expression4 = !(a && b);
//true
const expression5 = !a || !b;
//true
const expression6 = !(a || b);
//false
const expression7 = a && a;
//true

//console.log(expression7)