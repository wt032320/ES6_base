let name = '小明'
let age = 23
let flag = true

function sum(a, b) {
  return a + b
}

if (flag) {
  console.log(sum(2, 3));
}

// 1.导出方式1
export {
  flag,
  sum
}

// 2. 导出方式2
export let num1 = 1000;
export let height = 1.88;

// 3. 导出函数/类
export function sum1(a, b) {
  return a + b
}

export class Person {
  run() {
    console.log('在奔跑');
  }
}

//4. export default
// export default在同一模块中 不允许存在多个
const address = 'beijing';
export default address
