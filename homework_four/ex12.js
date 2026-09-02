let nums = [];

for (let i = 0; i < 100; i++) {
  let ran = Math.floor(Math.random() * 2000 - 1000);
  nums.push(ran);
}

let max = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log(max);

let min = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] < min) {
    min = nums[i];
  }
}

console.log(min);

let pos = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 0) {
    pos++;
  }
}
console.log(pos);

let neg = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 0) {
    neg++;
  }
}
console.log(neg);

let equal = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 0) {
    equal++;
  }
}
console.log(equal);

let even = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    even++;
  }
}
console.log(even);

let odd = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    odd++;
  }
}
console.log(odd);

let equal_2 = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 100) {
    qual_2++;
  }
}
console.log(equal_2);
