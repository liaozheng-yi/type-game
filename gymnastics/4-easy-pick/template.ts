type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

export default MyPick

// js
function myPick(todo, keys) {
    const obj = {}
    keys.forEach(key => {
        if(key in todo) {
            obj[key] = todo[key]
        }
    });
    return obj
}

// 1. 返回一个对象
// 2. 遍历foreach  mapped
// - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. todo[key] 取值 indexed
// - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4. 看看 key 在不在 todo 里面
//   1. keyof  lookup
//    - https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
//   2. extends 约束
//    - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints