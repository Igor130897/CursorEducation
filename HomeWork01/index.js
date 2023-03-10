let potato = 15.678; // ціни на товар
let cherry = 123.965; // ціни на товар
let blueberry = 90.2345; // ціни на товар

let sum = potato + cherry + blueberry; // сума всіх товарів

console.log( Math.max (potato,cherry,blueberry) ); // Виведення в консоль максимальної суми з товарів
console.log( Math.min (potato,cherry,blueberry) ); // Виведення в консоль мінімальної суми з товарів
console.log(sum); // Виведення в консоль суми всіх товарів

let potatoInteger = Math.floor(potato); //Округлення ціни в меншу сторону 
let cherryInteger = Math.floor(cherry); //Округлення ціни в меншу сторону
let blueberryInteger = Math.floor(blueberry); //Округлення ціни в меншу сторону

console.log(potatoInteger, cherryInteger, blueberryInteger); // Виведення в консоль стоймость всіх товірів окремо

let sumInteger = potatoInteger + cherryInteger + blueberryInteger; // Сума всіх товарів
console.log(sumInteger); // Виведення в консоль суми всіх товарів

console.log(sum.toFixed(1)); // Округлення суми до сотих та виведення в консоль

console.log(sumInteger % 2 == 0); // true - четное; false - не четное. Виведення в консоль парного або не барного значення в булевому значенні

let money = 500; // Переміна оплати

let change = money - sum; // Переміна розрахунку решти

console.log(change); // Виведення в консоль решти

let averageSum = sum / 3; //Переміна середньої вартості

console.log(averageSum.toFixed(2)); // Виведення в консоль середнбої вартості

let randomSale = Math.random(); // Переміна рандомної знижки
console.log(randomSale); // Виведеня в консоль рандомної знижки

let sumPay = cherry - randomSale; //Переміна суми враховуючи знижку
console.log(sumPay.toFixed(2)); // Виведення її в консоль

let sumSale = cherry - sumPay; // Переміна суми знижки
let costPrice = cherry / 2; // Переміна собівартості продукта
let netProfit = costPrice - sumSale; // Переміна чистого дохода
console.log(netProfit); // Виведення чистого дохода в консоль

let lastExercise = `Ціна potato: ${potato}, Ціна cherry: ${cherry}, Ціна Blueberry: ${blueberry}, Сума всіх товарів: ${sum}, Округлення potato в меншу сторону: ${potatoInteger}, Округлення cherry в меншу сторону: ${cherryInteger},Округлення blueberry в меншу сторону: ${blueberryInteger}, Сума всіх товарі(округлена): ${sumInteger}, Оплата: ${money}, Решта: ${change}, Середня вартість: ${averageSum}, Рандомна знижка: ${randomSale}, Сума враховуючи знижку: ${sumPay}, Сума знижки: ${sumSale}, Собівартість продукта: ${costPrice}, Чистий дохід: ${netProfit}`
console.log(lastExercise);