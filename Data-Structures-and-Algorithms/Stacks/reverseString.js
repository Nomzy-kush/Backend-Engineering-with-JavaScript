function reverseString(str) {
    const stack = [];

    for (let char of str) {
        stack.push(char);
    }

    let reversedStr = "";

    while (stack.length > 0) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

const result = reverseString("hello world");
console.log(result); 