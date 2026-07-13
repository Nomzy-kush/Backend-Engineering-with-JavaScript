
// Create an array with 5 student names
const students = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

// Function to print all student names
function printStudentNames(studentArray) {
    for (let i = 0; i < studentArray.length; i++) {
        console.log(`Found student: ${studentArray[i]}`);
    }
}

// Call the function to print the student names
printStudentNames(students);


// O(n)
const groceries = ['milk', 'bread', 'eggs', 'cheese', 'fruits'];

const searchForItem = (item) => {
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] === item) {
            console.log(`Found ${item} in the grocery list!`);
            return true;
        }
    }
    console.log(`${item} not found in the grocery list.`);
    return false;
};

// Search for an item in the groceries array
searchForItem('eggs');
searchForItem('chocolate');





