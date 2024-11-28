// BIG O = O(n^2)

const findDuplicates = (arr) => {
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }

    return duplicates;
};

const numbers = [1, 2, 3, 4, 2, 5, 1];
console.log(findDuplicates(numbers)); // Output: [1, 2]


