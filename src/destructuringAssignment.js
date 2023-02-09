/**
 * 分割代入
 */
// コードを簡潔に見やすくする記述方法
// オブジェクトや、配列からプロパティを変数として取り出して、分割して代入する三項演算子

// オブジェクト定義
const myObject = {
  name: "takaya",
  age: "30"
};
console.log(myObject);

// そのまま、テンプレートリテラルで記述
const message_1 = `私は${myObject.name}です。年齢は${myObject.age}です。`;
console.log(message_1);

// 分割代入を用いて記述
// オブジェクト内の配列から、要素を簡易変数として取り出せる
const { name, age } = myObject;
const message_2 = `私は${name}です。年齢は${age}です。（分割代入使用）`;
console.log(message_2);

const myArray = ["taka", "31"];
const message_3 = `私の名前は${myArray[1]}歳です`;
console.log(message_3);

const [name_1, age_2] = myArray;
const message_4 = `私は${name_1}です。年齢は${age_2}です。（分割代入使用）`;
console.log(message_4);
