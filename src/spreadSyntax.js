/**
 * スプレッド構文
 */
// ...を使用して、配列の操作を行う

// 配列の展開
const array_1 = [1, 2];
console.log(array_1);
console.log(...array_1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(array_1[0], array_1[1]);
// 引数に配列の要素を順番に入れられる
sumFunc(...array_1);

// 配列をを展開・まとめる際に、分割代入と併用して使われる事が多い
const array_2 = [1, 2, 3, 4, 5];
const [num1, num2, ...array_3] = array_2;
console.log(num1);
console.log(num2);
console.log(array_3);

// 配列のコピー・結合
const array_4 = [10, 20];
const array_5 = [30, 40];

// コピー
const array_6 = [...array_4];
console.log(array_6);
// コピー別解（参照先が同じになるため、推奨はされない。）
// 左辺・右辺のいずれかを修正した場合、もう一方に反映されてしまう。
const array_8 = array_4;
console.log(array_8);

// 結合
const array_7 = [...array_4, ...array_5];
console.log(array_7);
