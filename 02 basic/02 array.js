const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);
// add one array in anoter array but in array format
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // combine two array and give new array
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

const  another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [3, 5]]]

const realAnotherarray = another_array.flat(Infinity) // yek ke ander yek array h to flat un ko sb ko yek array banayega
console.log(realAnotherarray);


console.log(Array.isArray("ram"));
console.log(Array.from("ram"));
console.log(Array.from({name:"ram"})); // interesting for exam purpose

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //return new array from set of element



