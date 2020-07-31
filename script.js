'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

}
start();
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let q1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
            q2 = prompt("Во сколько обойдётся?", "");
    
	if ( (typeof(q1))==='string' && (typeof(q1)) != null && (typeof(q2)) != null
	    && q1 != "" && q2 != "" && q1.length < 50) {
            appData.expenses[q1] = q2;
        } else {
            i--;
        }
    
    };
}
chooseExpenses();


function detectDayBudget() {                                            // Расчёт дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();


function detectLevel() {                                                // Расчёт уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log ("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log ("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
        console.log ("Высокий уровень достатка");
    } else {
        console.log ("Произошла ошибка");
    }
}
detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}
checkSavings();


function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();
