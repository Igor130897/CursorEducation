let N = prompt('Введіть перше значення,більше 0: ');
let M = prompt('Введіть друге значення,яке більше минулого: ');
const evenNumbers = confirm('Пропускати парні числа?');
if (N > M){
    [N,M] = [M,N];
    document.writeln('<h2>Перше значення більше другого!</h2>')
}
if((+N) && (+M)) {
    if ((+N) % 1 ==0 && (+M) % 1 ==0){
        let result = 0;
        for (; N <= M; N++){
            if(evenNumbers && N %2 ==0){
                continue
            }
            result += +N;
        }
        document.writeln(`<h1> ${result} </h1>`);
    } else document.writeln(`<h1>Введіть цілі числа</h1>`);
} else document.writeln(`<h1>Введить числа</h1>`);