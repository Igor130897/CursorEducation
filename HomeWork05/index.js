// First exercise
function getRandomArray (length, min, max){
    const array = [];
    for (let i = 0; i < length; i++){
        array.push(Math.floor(Math.random() * (max - min) + min))
    }
    return array
}
const getArray = getRandomArray (10, 1, 100);
console.log('Масив випадкових чисел: ' +getArray)


//Third exercise
const getAverage = (numbers) => {
    const averageNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        if (Number.isInteger(numbers[i])) {
            averageNumbers.push(numbers[i])
        }
    }
    const sum = averageNumbers.reduce((prevValue, item) => {
        const res = prevValue + item;
        return res
    }, 0)
    const averange = sum / averageNumbers.length;
    return averange
};
const averange = getAverage(getArray);
console.log('Середне значення: ' + averange)


//Five exercise
function filterEvenNumbers(numbers){
    const res = numbers.filter((arr) => {
        return arr % 2 != 0;
    });
    return res
}
const arr = getRandomArray(10, 1, 100);
console.log('Фільтр парних чисел: ' +filterEvenNumbers(arr))


//Six exercise
function countPositiveNumbers(numbers) {
    const resArr = numbers.filter((number) => {return number > 0})
    return resArr.length
}
console.log('Кількість більших чисел: ' +countPositiveNumbers(arr))


//seven exercise
function getDividedByFive(numbers){
    const res = numbers.filter((arr) => {
        return arr % 5 ===0;
    })
    return res
}
console.log('Числа діляться на 5: ' + getDividedByFive(arr))


// ten exercise
function generateCombinations(string){
    if(string.length <= 10){
        if (string.length === 1){
            return[string];
        }
        const result = [];
        for (let i = 0; i < string.length; i++){
            const letter = string[i];
            const cutLetter = string.slice(0, i) + string.slice(i + 1);
            const combinations = generateCombinations(cutLetter);
            combinations.map((combination)=>{
                result.push(letter + combination);
            });
        }
        return result;
    }
}
console.log('Варіанти слова: ', generateCombinations('Sun'))