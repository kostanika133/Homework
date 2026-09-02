let nums = [
  157, 794, 694, 100, 44, 487, 365, 76, 949, 490, 208, 406, 274, 948, 97, 847,
];
let min = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] < min) {
    min = nums[i];
  }
}

console.log(min);
