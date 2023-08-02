// Your code goes here
const rapid = (caracter) => {
    let consonants = [];
    for(let letra of caracter.toLowerCase()){
        if(['a','e','i','o','u'].includes(letra) == false)
            consonants.push(letra.toUpperCase())
    }
    return consonants.join('');
};


// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
