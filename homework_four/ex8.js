const numbers = [12, 45, 50, 99, 50, 18, 50, 3];

const find = 50;
let times = 0;
for (let i = 0; i < numbers.length; i++) {
  if (find == numbers[i]) {
    console.log(`found ${find} at index ${i}`);
    times++;
    continue;
  }
}
console.log(times);
