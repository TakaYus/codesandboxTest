/**
 * アロー関数
 */

//  従来の関数_1
function funcPre1(argument) {
  return argument;
}
console.log(funcPre1("従来の関数式1"));

//  従来の関数_2
const funcPre2 = function (argument) {
  return argument;
};
console.log(funcPre2("従来の関数式2"));

// アロー関数_1
const funcArr1 = (argument) => {
  return argument;
};
console.log(funcArr1("アロー関数式1"));

// アロー関数_2　省略ver
// 処理が1行の場合、returnと{}が省略できる。
const funcArr2 = (argument) => argument;
console.log(funcArr2("アロー関数式2（省略ver）"));

// 計算処理の場合
// 通常のアロー関数
const funcArr3 = (num1, num2) => {
  return num1 + num2;
};
console.log(funcArr3(8, 2));
// 省略verのアロー関数
const funcArr4 = (num1, num2) => num1 + num2;
console.log(funcArr4(30, 70));
