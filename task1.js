function positiveNumbers(sourceArray) {
    let newArray = sourceArray.filter(number => number > 0);
    return newArray;
}
let sourceArray = [-1, -2, 0, 4, -23, 45];
let plus = positiveNumbers(sourceArray);
console.log(plus); // Выведет [4, 45]