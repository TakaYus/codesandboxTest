/**+
 * デフォルト値、引数など
 */

//  react開発でよく使われる技法
//  アロー関数で作る

const sayHello_1 = (name = "ゲスト") => console.log(`こんにちは${name}です。`);
sayHello_1(/**空欄;デフォルトに設定した引数を表示*/);

const sayHello_2 = (name) => console.log(`こんにちは${name}です。`);
sayHello_2(/**undefined*/);
// 上記式ではバグが発生しやすくなるため、デフォルト値の指定が推奨される
