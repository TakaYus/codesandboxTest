/**
 * マップとフィルター
 */

//  配列の編集
//  .map((value, index,array)=>{}
// マップの引数は順に、全ての値・添え字・配列

// 従来のループ文による値の取り出し
const nameArray = ["taka", "yuu", "hiro", 1, 2, 3, 4, 5];
for (let index = 0; index < nameArray.length; index++) {
  console.log(nameArray[index]);
}

// map
// マップを使用した値のアクセスと、一括編集を行える
const nameArrayMap = nameArray.map((name) => {
  return name;
});
console.log(nameArrayMap);

// filter
// 配列の削除側の処理
// 条件に一致した時だけ出力する
// 偶数（2で割ったあまりが0となる値のみ出力する場合）
const numArrayFilter = nameArray.filter((num) => {
  return num % 2 === 0;
});
console.log(numArrayFilter);

// 練習1
// mapを使用して、バリューに装飾を行う
// 1番目は、2番目は、・・・と番号を付ける場合
const nameArray_2 = nameArray.map((name, index) => {
  return `${index + 1}番目は${name}さんです。`;
});
console.log(nameArray_2);

// 練習2
// mapとifを使用して、装飾するバリューを指定する
const nameArray_3 = nameArray.map((name) => {
  if (name === "hiro") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(nameArray_3);
