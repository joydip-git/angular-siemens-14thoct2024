const numbers: number[] = [1, 2, 3, 4]
numbers.push(12, 13)
/*
numbers.splice(2, 3, 100, 200)
const copied = numbers.slice(0, 4)
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}
for (const index in numbers) {
    const element = numbers[index];
    console.log(element);
}
for (const element of numbers) {
    console.log(element);
}
    */
// const compareFn = function (a: number, b: number) {
//     return a - b
// }
// numbers.sort(compareFn)
//console.log(numbers);
// const filteredNumbers = numbers.filter(
//     (a) => a % 2 === 0
// )

// const mappdNumbers = filteredNumbers.map(
//     a => a * 2
// )
numbers
    .sort((a, b) => b - a)
    .filter(a => a % 2 === 0)
    .map(a => a * 2)
    .forEach(
        (a) => console.log(a)
    )