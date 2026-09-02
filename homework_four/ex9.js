let numbers = [];
let counter_1 = 0;
let counter_2 = 0;
for (let i = 0; i < 100; i++) {
  let ran = Math.floor(Math.random() * 1000);
  numbers.push(ran);
}
console.log(numbers);
console.log(numbers.length);

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 100) {
    counter_1++;
  }
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 500) {
    counter_2++;
  }
}

console.log(counter_1);
console.log(counter_2);
