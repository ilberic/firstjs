'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};


for(let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
        if((typeof(a))==='string' && (typeof(a)) != 'null' &&  (typeof(b)) != 'null'
            && a != '' && b != '' && a.length < 50){
            appData.expences[a] = b;
            console.log('expences done!');
        } else  {
        alert("Произошла ошибка");
        for(let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
                if((typeof(a))==='string' && (typeof(a)) != 'null' &&  (typeof(b)) != 'null'
                    && a != '' && b != '' && a.length < 50){
                    appData.expences[a] = b;
                    console.log('expences done!');
                    }
        }
    }
};
// let i = 0;
// while (i < 2) {
//     i++
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется?', '');
//     if ((typeof (a)) === 'string' && (typeof (a)) != 'null' && (typeof (b)) != 'null' &&
//         a != '' && b != '' && a.length < 50) {
//         appData.expences[a] = b;
//         console.log('expences done!');
//     } else {
//         alert("Произошла ошибка");
//         while (i < 2) {
//             i++
//             let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//                 b = prompt('Во сколько обойдется?', '');
//             if ((typeof (a)) === 'string' && (typeof (a)) != 'null' && (typeof (b)) != 'null' &&
//                 a != '' && b != '' && a.length < 50) {
//                 appData.expences[a] = b;
//                 console.log('expences done!');
//             }
//         }
//     }
// }


appData.moneyPerDay = money / 30;

alert('Ваш бюджет на месяц: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Ошибка');
}

