// class MyArray {
//     constructor () {
//         this.length = 0;
//         this.data = {}
//     }

//     push(item) {
//         this.data[this.length] = item;
//         this.length++
//     }

//     get(index) {
//         return this.data[index]
//     }

//     pop() {
//     if (this.length === 0) return undefined;  // Handle empty array
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
// }

// shift() {
//     if (this.length === 0) return undefined;  // Handle empty array
//     const firstItem = this.data[0];
//     for (let i = 0; i < this.length; i++) {
//         this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//     return firstItem;
// }

// delete(index) {
//     if (index < 0 || index >= this.length) return undefined;  // Handle out-of-bounds index
//     const deletedItem = this.data[index];
//     for (let i = index; i < this.length - 1; i++) {
//         this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//     return deletedItem;
// }
// }

// const NewArray = new MyArray();
// NewArray.push('apple');
// NewArray.push('banana');
// NewArray.push('mango');
// NewArray.push('onions');

// console.log('Initial array:', NewArray);
// console.log('Length:', NewArray.length);

// console.log('\nShifted item:', NewArray.shift());
// console.log('After shift:', NewArray);
// console.log('New length:', NewArray.length);

// console.log('\nPopped item:', NewArray.pop());
// console.log('After pop:', NewArray);

// console.log('\nGet index 0:', NewArray.get(0));
// console.log('Get index 1:', NewArray.get(1));

// console.log('\nDeleted item at index 0:', NewArray.delete(0));
// console.log('After delete:', NewArray);


// Reverse String
// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }


// const reverseString = (str) => {
//     return str.split("").reverse().join("");
// }

// console.log('\nReversed string:', reverseString('hello'));


// Palindromes
// if the reverese string is equal to the original one 


// const palindrome = (str) => str.split('').reverse().join('');
// console.log(palindrome("hello"))


// reversing Integers

// const reverseIntegers = (num) => {
//     const reversed = num.toString().split('').reverse().join('')
//     return parseInt(reversed) * Math.sign(num) 
// }

// console.log(reverseIntegers(1,2,3,4));


// Sentence Capitalization
//  const capitalization = (str) => {
//     return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
// };

// console.log(capitalization('hello people'));


// Fizzbuzz exercise 
// const fizzbuzz = (n) => {
//     for(let i = 1; i <= n; i++) {
        
//         // Check divisible by BOTH 3 AND 5 first
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         }
//         // Then check divisible by 3
//         else if (i % 3 === 0) {
//             console.log("Fizz");
//         }
//         // Then check divisible by 5
//         else if (i % 5 === 0) {
//             console.log("Buzz");
//         }
//         // Otherwise print the number
//         else {
//             console.log(i);
//         }
//     }

// }

// fizzbuzz(20);



MaxProfit

const stockPrices = [7,1,5,3,6,4];







