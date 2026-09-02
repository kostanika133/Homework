let nums = [
  7, 51, 58, 37, 48, 38, 21, 27, 55, 83, 27, 9, 8, 11, 43, 93, 28, 70, 72, 40,
];

const find = 27;
let times = 0;
for (let i = 0; i < nums.length; i++) {
  if (find == nums[i]) {
    times++;
  }
}
console.log(times);
