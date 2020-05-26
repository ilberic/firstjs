let money, time;
// function start() {
//     money = +prompt('Ваш бюджет на месяц?', '');
//     time = prompt('Введите дату в формате YYYY-MM-DD', '');
//     while(isNaN(money) || money == "" || money == null) {
//         money = +prompt('Ваш бюджет на месяц?', '');
//     }
// }
// start();
let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: true
};

// function chooseExpences(){
//     for(let i = 0; i < 2; i++) {
//         let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//             b = prompt('Во сколько обойдется?', '');
//             if((typeof(a))==='string' && (typeof(a)) != 'null' &&  (typeof(b)) != 'null'
//                 && a != '' && b != '' && a.length < 50){
//                 appData.expences[a] = b;
//                 console.log('expences done!');
//             } else  {
//                 alert("Введите правильное значение");
//                 i--;
//             }
//     }
// }
// chooseExpences();

// appData.moneyPerDay = (money / 30).toFixed();

// alert('Ваш бюджет на месяц: ' + appData.moneyPerDay);

// function detectLevel (){
//     if(appData.moneyPerDay < 100){
//         console.log('Минимальный уровень достатка');
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log('Средний уровень достатка');
//     } else if (appData.moneyPerDay > 2000) {
//         console.log('Высокий уровень достатка');
//     } else {
//         console.log('Ошибка');
//     }
// }

// detectLevel();

// function checkSavings(){
//     if(appData.savings == true) {
//         let save = +prompt("Какова сумма накоплений?"),
//             percent = +prompt("Под какой процент?");

//         appData.monthIncome = save/100/12*percent;
//         alert("Доход за месяц с вашего депозита: " + appData.monthIncome);
//     }
// }

// checkSavings();

// function detectDayBudget() {
//     if (typeof(money) === 'number' || money !== "" || money !== null){
//     appData.detectDayBudget = (money/30 + appData.monthIncome/30).toFixed();
//     console.log("Успешно!!!");
//     }
// }
// detectDayBudget();

function chooseOptExpenses () {
    for (let i = 1; i < 4; i++){
        let expQuest = prompt("Статья необязательных расходов");
        appData.optionalExpences[i] = expQuest;
}
}

chooseOptExpenses();