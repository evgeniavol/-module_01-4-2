"use strict";

const income = Number(prompt('Введите сумму дохода для расчета подоходного налога'));
let tax;
if (income !== "" && income > 0 && income <= 14999) {
    tax = Math.round(income * 0.13);
    console.log(`Налог к уплате ${tax} руб. по ставке 13%`);
} else if (income !== "" && income > 0 && income < 49999) {
    tax = Math.round(income * 0.20);
    console.log(`Налог к уплате ${tax} руб. по ставке 20%`);
} else if (income !== "" && income > 0 && income > 50000){
    tax = Math.round(income * 0.30);
    console.log(`Налог к уплате ${tax} руб. по ставке 30%`);
} else {
    console.log('Введите корректные данные');
}