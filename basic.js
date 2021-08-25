// variable
// কিভাবে ভেরিয়েবল ডিকলার করা হয় ?
var deposit = 400;
// condition
// কিভাবে কন্ডিশন বের করা বা পার্থক্য করা যায় ?
if (deposit > 500) {

} else if (deposit < 200) {

} else if (deposit == 500) {

} else if (deposit != 500) {

} else if (deposit >= 500) {

} else if (deposit <= 500) {

} else {

}

// array
// অ্যারে দুই ভাবে ভাবে করা যায় 0১. নাম্বার ০২. নাম 
const numbers = [45, 6587, 124, 45, 1, 365];
const numberCount = numbers.length;
numbers.pop();
numbers.push(111);
numbers[2] = 555;
// check whether 222 included in the array
// কোন একটা জিনিস অ্যারে মধ্যে আছে কিনা ?
if (numbers.indexOf(222) != -1) {

}
if (numbers.includes(222)) {

}

// loop
// while, for
for (const number of numbers) {

}
// function
function fullName(first, second) {
    const name = first + ' ' + second;
}
const person = fullName('Rahim', 'Ali');

// object 
const bottle = { color: 'yellow', contain: 'water', price: 50 }