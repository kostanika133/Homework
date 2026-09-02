let word = prompt("enter the word: ");

word = word.trim();
word = word.toLowerCase();
let w_lenght = word.length;
let letters = "aeiou";

for (let i = 0; i <= w_lenght; i++) {
  for (let j = 0; j < 5; j++) {
    if (word[i] === letters[j]) {
      console.log(word[i]);
    }
  }
}
