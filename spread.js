const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
// console.log(...numbers); কোন একটা অ্যারে থেকে নাম্বার বের করার নিয়ম

const max = Math.max(23, 99, 65, 21, 34);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const numbers2 = [...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
