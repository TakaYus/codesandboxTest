/**
 * const let　の変数宣言
 */

var val1 = "var変数";
let val2 = "let変数";
const val3 = "const変数";

// ■varは、再宣言・再代入可能
console.log(val1);

val1 = "var変数の上書き";
console.log(val1);

var val1 = "var変数の再宣言";
console.log(val1);

// ■letは、再宣言不可・再代入可能
// ループ文で回数毎に数値が変化する場合に対応可能
// let val2 = "letの再宣言";
val2 = "letの再代入";
console.log(val2);

// ■constは、再宣言・再代入不可の確認
// ただし、オブジェクト内のプロパティは変更可能
// const val3 = "const再宣言";
// val3 = "const上書き";

const val4 = {
  name: "takaya",
  age: 30
};

val4.name = "taka";
console.log(val4);

val4.addres = "sapporo";
console.log(val4);

const val5 = ["aaa", "bbb"];
console.log(val5);

val5[0] = "ccc";
val5.push("ddd");
console.log(val5);

// おさらい
// 上記オブジェクトには、キーに対して関数を格納できる。
// 一方、連想配列ではキーに対して値のみを格納できる。
