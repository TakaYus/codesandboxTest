/**
 * 三項演算子
 */

//  if・else　のような分岐文の省略記述

// ある条件 ?　true時の処理 : false時の処理
const val_1 = 1 > 0 ? "true" : "false";
const val_2 = 0 > 1 ? "true" : "false";
console.log(val_1);
console.log(val_2);

const num = 13000;
// toLocaleString()は、数値を3桁区切りにするオブジェクト
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
console.log(formattedNum);

const str = "aaa";

const formattedStr =
  typeof str === "number" ? num.toLocaleString() : "数値を入力してください。";
console.log(formattedStr);
