let names = [
  "nika",
  "anamaria",
  "gigi",
  "nata",
  "sahili",
  "saba",
  "goga",
  "tekla",
];

const count = names.length;
const first = names[0];
const last = names[names.length - 1];
const middle = names[Math.floor(names.length / 2)];

console.log(`number of names: ${count}`);
console.log(`first name: ${first}`);
console.log(`last name: ${last}`);
console.log(`middle name: ${middle}`);
