//1. 导入的{}中定义的变量
import {flag} from './aaa.js';
if (flag) {
  console.log('小明NB');
}

//2. 直接导入export
import {num1, height} from './aaa.js';
console.log(num1);
console.log(height);

//3. 导入export 的function/class
import {sum1, Person} from "./aaa.js";
console.log(sum1(30, 40));
const p = new Person();
p.run();

// 4.  使用default 导入  导入的变量或者函数名 可以自己进行命名
import add from "./aaa.js";
console.log(add);

// 5.统一全部导入
import * as aaa from './aaa.js';
console.log(aaa.flag);