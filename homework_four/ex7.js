const numbers = [12, 45, 7, 99, 31, 18, 50, 3];

const find = 50;

for (let i = 0; i < numbers.length; i++) {
  if (find == numbers[i]) {
    console.log(`found ${find} at index ${i}`);
    break;
  } else {
    console.log("50 not found");
  }
}
