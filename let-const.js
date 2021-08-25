// break up with var
// let 
// কোন একটা ভেরিয়েবলের মান চেন্জ করতে হলে তখন তাকে let নতুন ভেরিয়েবল দিয়ে শুরু করতে হবে। 
let balance = 1240;
balance = 1340;
// কোন একটা ভেরিয়েবলের মান সরাসরি চেন্জ করতে হলে তখন তাকে const নতুন ভেরিয়েবল দিয়ে শুরু করতে হবে। এর মাধ্যমে রি-অ্যাসাইন করা যাবে না তবে যে কোন একটা পার্ট চেন্জ করা যাবে।
const userName = 'janpahi potas potas';
const weTogether = 'ami ' + userName;
console.log(weTogether);
// userName = 'moyna pakhi'; not allowed

const numbers = [45, 23, 89, 60];
// numbers = [99, 145, 3]; // not allowed
numbers.push(555);
numbers[1] = 333;

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}

const student = { roll: 101, name: 'mofij', job: 'intern' };
student.name = 'MOfazzol';
// student = { name: 'mofazzol' }; not allowed