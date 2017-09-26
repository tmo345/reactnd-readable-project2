// @flow

function identity<T>(value: T): T {
  return value;
}

class Item<T> {
  prop: T;

  constructor(param: T) {
    this.prop = param;
  }

  method(): T {
    return this.prop;
  }
}

type Item1<T> = {
  foo: T,
  bar: T,
}

interface Item2<T> {
  foo: T,
  bar: T
}

function constant<T>(value: T) {
  return function(): T {
    return value;
  }
}

function ident<One, Two, Three>(one: One, two: Two, three: Three): One {
  return one;
}

function identity1<T>(value: T): T {
  return value;
}

let one: 1 = identity1(1)
let two: 2 = identity1(2)
let three: 3 = identity1(3)

 function log<T>(obj: T): T {
   if (obj && obj.foo) {
     console.log(obj.foo);
   }
   return obj;
 }

 log({foo: 'foo', bar: 'bar'})
 log({bar: 'bar'})


 class MyClass<A, B, C> {
   constructor(arg1: A, arg2: B, arg3: C) {

   }
 }

 let val: MyClass<number, boolean, string> = new MyClass(1, true, 'three')
