#!/usr/bin/env node
class A{
  constructor(name){
    this.name = name
  }
  her(){
    return 'yes'
  }
}
class B extends A{
 constructor(name, age){
    super(name)
    this.age = age
 }
 func(){
    return `Hi am ${this.name} and has ${this.age} years`
 }
 func2(){
    //
 }
}

const p = new B('ali', 12)
const a = new A('ali')
console.log(Object.getOwnPropertyNames(a.constructor.prototype))
console.log(a.constructor.prototype)
