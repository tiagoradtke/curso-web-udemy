const [a] = [10]

console.log(a)

const [n1, , n3, , n5, n6 = 0]  =   [10, 7 , 9, 8 ]
console.log(n1,n3,n5,n6)

console.log(typeof [10, 7 , 9, 8 ])

const [ ,[ , nota ] ] = [[ , 8, 8],[9 , 6, 8]]
console.log(nota)


// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]

// destructuring assignment
let [firstName, surname] = arr;

console.log(firstName); // Ilya
console.log(surname);  // Kantor

//destructuring é uma forma simplicada de fazer o que está feito abaixo
/* let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];*/