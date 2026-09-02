const numbers = [];

for (let i = 0; i < 50; i++) {
  let ran = Math.floor(Math.random() * 100) + 1;
  numbers.push(ran);
}

const target = numbers[Math.floor(Math.random() * numbers.length)];

let found = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === target) {
    console.log(`found ${target} at ${i}`);
    found = true;
    break;
  }
}

if (!found) {
  console.log(` number ${target}  not found.`);
}
