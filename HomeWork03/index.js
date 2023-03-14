document.writeln(`<p title="найбільша цифра у числі: (3482)">Функція No1: ${getMaxDigit(3482)}</p>`);
document.writeln(`<p title="Виведення 5 в ступінь 2:"> Функція No2: ${degree(5, 2)}</p>`);
document.writeln(`<p title="Зміна написання імені (iHoR)"> Функція No3: ${badName("iHoR")}</p>`);
document.writeln(`<p title="вираховує зарплату після сплати податків (120, 19.5)"> Функція No4: ${pureSalary(120, 19.5)}</p>`);
document.writeln(`<p title="рандомне число в N до M (0, 300)"> Функція No5: ${numRandom(0, 300)}</p>`);

// Number 1
function getMaxDigit(number){
    let maxSum = 0;
    while(number > 0){
        let justNum = number % 10;
        if (justNum > maxSum){
            maxSum = justNum;
        }
        number = Math.floor(number / 10);
    }
    return maxSum;
}


// Number 2
function degree(a, b) {
    let exp = 1;
    if (b > 0) {
       for (let i = 0; i < b; i++) {
          exp *= a;
       }
       return exp;
    } else if (b < 0) {
       for (let i = 0; i < Math.abs(b); i++) {
       exp *= a;
       }
       return 1/exp;
    } else if (b = 1) {
       return exp;
    }
 }

// Number 3
function badName (name) {
    let littleName = name.toLowerCase();
    let littleLetter = littleName.slice(1);
    let firstLetter = name[0];
    let bigLetter = firstLetter.toUpperCase();
    return(bigLetter+littleLetter);
}

// Number 4
function pureSalary(salary, tax) {
     let noTax = salary - salary * (tax / 100);
        return noTax;
}

// Number 5
function numRandom(N, M) {
    return (Math.round(Math.random()*(M-N))+N)
}
//number 6
const getRandomPassword = (a = 6) => Math.floor(Math.random() * Math.pow(10, a));
document.writeln(`<p title="Пароль на 6 цифр, або на ту кількість яку задасть користувач"> Функція No6 : ${getRandomPassword(6)}</p>`);