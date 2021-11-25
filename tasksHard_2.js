"use strict";

const incomes= Number(prompt('Введите сумму дохода для расчета налога'));
const limitPer13 = 15000;
const limitPer30 = 50000;
let tax;

if (incomes !== "" && incomes > 0 && incomes <= 14999) {
    tax = Math.round(incomes * 0.13);
    console.log(`Налог к уплате ${tax} руб. по ставке 13%`);
} else if (incomes !== "" && incomes > 0 && incomes < 49999) {
    tax = Math.round((incomes - limitPer13) * 0.20);
    console.log(`Налог к уплате ${tax} руб.`);
} else if (incomes !== "" && incomes > 0 && incomes > 50000) {
    tax = Math.round((incomes - limitPer30) * 0.30);
    console.log(`Налог к уплате ${tax} руб.`);
} else {
    console.log('Введите корректные данные');
}