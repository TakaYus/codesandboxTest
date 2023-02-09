/**
 * テンプレートリテラル
 */

//  文字列の中で、変数名を使いたい場合に記述が楽になる。

const name = "takaya";
const age = "30";

// 従来の記述
const messagePre = "私の名前は" + name + "で、年齢は" + age + "歳です。";
console.log(messagePre);

// ES2015以降の記述 `${}`を使用する。
const messageNew = `私の名前は${name}で、年齢は${age}歳です。(New)`;
console.log(messageNew);
