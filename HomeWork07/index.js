const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return this.tax*salary;
}
console.log(getMyTaxes.call(latvia, 1500))

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(ukraine))
console.log(getMiddleTaxes.call(latvia))
console.log(getMiddleTaxes.call(litva))

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(ukraine))
console.log(getTotalTaxes.call(latvia))
console.log(getTotalTaxes.call(litva))

function getMySalary() {
    const salaryProfit = {};
    salaryProfit.salary = Math.floor(Math.random()* (2000 - 1500) + 1500);
    salaryProfit.taxes = this.tax * salaryProfit.salary;
    salaryProfit.profit = salaryProfit.salary - salaryProfit.taxes;
    console.log(salaryProfit);
}
setInterval(function() { getMySalary.call(ukraine); }, 10000)