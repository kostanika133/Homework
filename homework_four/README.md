# Workshop — Homework: Arrays & Loops

Welcome to your next JavaScript homework! 🎉

In this homework, you will practice working with **arrays, indexes, loops, array methods, random numbers, and searching through arrays**.

**Deadline:** Before the next workshop.

**How to submit:** Push your homework to the same GitHub repository, then create a **Pull Request** to the homework repository and add your instructor as a **Reviewer**.

---

## Part 1 — Array Basics

### Task 1 — Accessing Elements

Create the following array:

```javascript
const numbers = [42, 7, -15, 100, 23, 8, 91];
```

Using indexes, print:

1. The first element
2. The second element
3. The fourth element
4. The last element
5. The middle element

**Requirements:**

* You must use array indexes.
* For the last element, use `.length`.
* For the middle element, calculate the middle index using `Math.floor()`.

---

### Task 2 — Array Information

Create an array containing at least **8 names**.

Print:

```text
Number of names: 8
First name: ...
Last name: ...
Middle name: ...
```

Do not manually write the indexes for the first, last, and middle elements.

---

## Part 2 — Adding and Removing Elements

### Task 3 — Shopping Cart

Create an empty array called `cart`.

Add the following products using `.push()`:

* `"Milk"`
* `"Bread"`
* `"Eggs"`
* `"Cheese"`
* `"Coffee"`

Print the array.

Then:

1. Add `"Chocolate"` to the beginning using `.unshift()`.
2. Remove the last item using `.pop()`.
3. Remove the first item using `.shift()`.

Print the array after each operation.

---

### Task 4 — Build and Empty an Array

Create an array containing at least **6 names**.

Use a loop to repeatedly remove elements from the array until it becomes empty.

Every time you remove a name, print:

```text
Removing Anna
Removing James
Removing Nick
...
```

At the end, print the array.

The final result should be:

```javascript
[]
```

**Hint:** You can use `.pop()` or `.shift()` inside a `while` loop.

---

## Part 3 — Loops and Arrays

### Task 5 — Greetings

Create an array containing at least **7 names**.

Use a `for` loop to print:

```text
Hello, Anna!
Hello, James!
Hello, Nick!
...
```

Then create another loop that prints the names **in reverse order**.

Example:

```text
Nick
James
Anna
...
```

Do not use `.reverse()`.

---

### Task 6 — Count a Number

Create an array of numbers containing at least **20 elements**.

Choose a number, for example:

```javascript
const find = 25;
```

Use a loop to count how many times that number appears in the array.

Print:

```text
25 appears 4 times
```

If it does not appear:

```text
25 appears 0 times
```

---

## Part 4 — Searching

### Task 7 — Find a Number

Create an array:

```javascript
const numbers = [12, 45, 7, 99, 31, 18, 50, 3];
```

Create a variable:

```javascript
const find = 50;
```

Search for the number using a loop.

If you find it, print:

```text
Found 50 at index 6
```

If the number is not found, print:

```text
50 was not found
```

Use `break` when the number is found.

---

### Task 8 — Find All Positions

Improve the previous task.

Instead of stopping after finding the first occurrence, print **every index** where the number appears.

For example:

```javascript
const numbers = [5, 10, 5, 20, 5, 30];
const find = 5;
```

Expected output:

```text
Found 5 at index 0
Found 5 at index 2
Found 5 at index 4
```

At the end, print how many times the number appeared.

---

## Part 5 — Random Numbers

### Task 9 — Generate Random Numbers

Create an empty array.

Use a loop to generate **100 random numbers between 1 and 1000** and add them to the array.

Use:

```javascript
Math.random()
```

and `.push()`.

After generating the numbers:

1. Print the entire array.
2. Print the number of elements in the array.
3. Find how many numbers are greater than `500`.
4. Find how many numbers are less than `100`.

Example output:

```text
Total numbers: 100
Numbers greater than 500: 47
Numbers less than 100: 9
```

---

## Part 6 — Find the Biggest and Smallest Number

### Task 10 — Maximum Number

Create an array containing at least **15 numbers**.

Find the biggest number using a loop.

You should start with:

```javascript
let max = numbers[0];
```

Then compare every other number with `max`.

Do **not** use:

```javascript
Math.max(...numbers)
```

Print:

```text
The biggest number is 999
```

---

### Task 11 — Minimum Number

Using the same array, find the smallest number.

Start with:

```javascript
let min = numbers[0];
```

Use a loop to find the smallest value.

Do not use:

```javascript
Math.min(...numbers)
```

Print:

```text
The smallest number is -25
```

---

## Part 7 — Challenge 🎯

### Task 12 — Number Statistics

Generate an array containing **100 random integers between -1000 and 1000**.

Then use loops to calculate:

1. The biggest number
2. The smallest number
3. How many numbers are positive
4. How many numbers are negative
5. How many numbers are exactly `0`
6. How many numbers are even
7. How many numbers are odd
8. The number of times `100` appears

Print the results in a readable format:

```text
===== Statistics =====

Biggest number: 987
Smallest number: -994

Positive numbers: 48
Negative numbers: 51
Zeros: 1

Even numbers: 52
Odd numbers: 48

100 appeared: 2 times
```

**Restrictions:**

* Use loops.
* Do not use `.filter()`, `.find()`, `.reduce()`, or other array helper methods that were not covered in the lecture.
* You may use `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.length`, `Math.random()`, and `Math.floor()`.

---

## Part 8 — Mini Challenge: Guess the Number

Create an array containing numbers:

```javascript
const numbers = [5, 9, 11, 12, 13, 25, 50, 100];
```

Create a variable:

```javascript
const target = 50;
```

Use a loop to search for the target.

If it is found, print:

```text
🎯 Found 50 at index 6!
```

If it is not found, print:

```text
❌ Number 50 was not found.
```

### Bonus

Instead of using a predefined array, generate **50 random numbers between 1 and 100** and search for a randomly chosen target.

---

# Rules

For this homework, try to solve the problems using only concepts covered in the workshop.

You may use:

* `const` and `let`
* Arrays
* Array indexes
* `.length`
* `.push()`
* `.pop()`
* `.shift()`
* `.unshift()`
* `for` loops
* `while` loops
* `if / else`
* `break`
* Comparison operators
* `Math.random()`
* `Math.floor()`
* Template literals

Avoid using methods or concepts that have not yet been explained in class.

## GitHub Submission

Before submitting:

* [ ] All exercises are completed.
* [ ] Code is formatted and readable.
* [ ] Variable names are meaningful.
* [ ] There are no unnecessary `console.log()` statements.
* [ ] Homework is pushed to your GitHub repository.
* [ ] A Pull Request is created to the homework repository.
* [ ] The instructor is added as a Reviewer.

Good luck! 🚀
