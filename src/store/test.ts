// var hello = (text: string) => {
//     return 'hello ${text}';
// }

// hello('word');
// let arrayNumbers: number[] = [1, 2, 3]

// let arrayNumbers: [number | string, string, number] = ['1', '2', 3]

// interface user {
//     id: number;
//     name: string;
//     age: number;
// }

// let test: user = {
//     id: 1,
//     name: 'test',
//     age: 10
// }

// function add(x: number, y: number, z?: number): number {
//     if (typeof z === 'number') {
//         return x + y + z;
//     }
//     return x + y;
// }
// add(0, 3, 1)

// const add1 = (x: number, y: number, z?: number): number => {
//     if (typeof z === 'number') {
//         return x + y + z;
//     }
//     return x + y;
// }

// // add1(0, 3, 1)

// const enum enums{
//     On = 'on',
//     Off = 'off',
// }

// const a = 'on';
// if(a === enums.On){
//     console.log(a);
// }

// function getA<T>( a: T){
//     return a;
// }

// let a1 = getA(1);

// let a2 = getA('1');\

// interface onlyOne{
//     one: string
// }

// function getA<T extends onlyOne>(a :T): T{
//     return a;
// }

// getA({one:'a',test:1,test1:2});

// class A<T>{
//     private a: T;
//     public getA(){
//         return this.a;
//     }

//     public setA(parms: T){
//         this.a = parms;
//     }
// }

// const a = new A<number>();
// a.setA(1);


// interface B<K,V>{
//     a1: K,
//     a2: V,
// }

// let b1: B<string,number> = {a1:'a1',a2:1};
// let b2: B<number,string> = {a1:1,a2:'a2'};

// type stringOrNumber = string | number
// let b3: stringOrNumber;
// b3 = '1';
// b3 = 1;
const a: 1 = 1 

type parms = 'a'|'b'|'c'|'d'
let b: parms = 'a'
b='b'
b='c'