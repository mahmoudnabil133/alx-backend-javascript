#!/usr/bin/env node
// // 1)arrow func
// const sum = (x, y)=> x+y
// //console.log(sum(2,3))
// // 2) let vs const.(both are block scope but const cant be changed)

// //3) opj, array destructuing
// const person =
// {
//     name:'ahmed',
//     age:12,
//     id:1323
// };
// const frouts = ['panana', 'orange', 'kewe', 'safandy']
// const { name } = person
// const [f1,f2] = frouts
// // 4) spread operator
// a1=['ali', 'enas']
// a2=['kmal', 'mona']
// a3 = ['nada', 'emy']
// nums = [1,2,3,4,10]
// const aTot = [...a1, ...a2, ...a3];
// const sumNums = Math.max(...nums)
// // console.log(aTot, sumNums)
// // 5) for/of
// nums = [1,2,3,4,5,6]
// let SUM = 0;  
// for (let n of nums){
//     SUM += n;
// }
// // console.log(SUM)

// // 6) set and maps
// // no duplicate key in set
// const letters = new Set()
// letters.add("a");
// letters.add("b");
// letters.add("c");

// // 7) classes
class Cat {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const cat1 = new Cat("bsbs", 2)
const cat2 = new Cat("neeeew", 3)
console.log(cat1.age, cat2.name)
