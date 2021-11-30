const iterator=[1,2,3,4,5];

const iterador=iterator[Symbol.iterator]();

console.log(iterator);
console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next=iterador.next();

// while (!next.done) {
//     console.log(next.value);
//     next=iterador.next();
// }