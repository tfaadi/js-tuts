// const a=10;
// a=20;
// console.log(a);




// let s=20;
// console.log(s);



// function abc(){
//     var b=30;
// }
// console.log(b);



// let name="aditya";
// let c=12;
// let uid=7527;
// console.log([name, c, uid]);

// let s=new String("aditya")
// console.log(typeof s);
// console.log(s.length);



// let s="aditya";
// console.log(typeof s);


// let s="aditya"
// console.log(s.length);
// console.log(typeof s);

// console.log(Math.floor(Math.random()*20+1));

// let arr=[1,2,3,4,5];
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr.slice(1,3)); //3 not included 
// console.log(arr);
// console.log(arr.splice(1,3)); //3 is included 
// console.log(arr);


// let a=[1,2,3,4,5];
// // let b=[6,7,8,9,9];
// // let c=[...a,...b];
// // console.log(c);


// console.log(Array.isArray(a));
// console.log(Array.from("aditya"));

// let a=10;
// let b=20;
// let c=30;
// console.log(Array.from({name:"aditya"}));

// let myObj={
//     name:"aditya",
//     func:function test(){
//         return "hello";
//     }   
// }

// console.log(myObj.func())

// let obj={

// }
// obj.getName=function(){
//     return "hello"
// }

// let a=obj.getName;
// console.log(a);
// console.log(obj.getName());



// let obj1={
//     name:"aditya"
// }
// let obj2={
//     class:12
// }
// let obj3=Object.assign({}, obj1, obj2);
// console.log(obj3);


// let str=new String("aditya")
// console.log(typeof str);


// let str="aditya";
// console.log(typeof str);
// console.log(str.length);
// console.log(typeof str);




//objects

// const person=new Object();
// person.name="aditya";
// person.class=12;
// person.age=20;
// console.log(person);

// const person={}
// person.name="aditya";
// person.class=12;
// person.age=20;
// console.log(person);


// //mutability of objects 

// const x=person;
// x.name="arsh";
// console.log(person);


// let x=20;
// let y=x;
// x=30;
// console.log(x);



//object properties
//for...in loop


// const person={
//     name:"aditya",
//     class:12,
//     age:20
// }
// for(let i in person){
//     console.log(person[i]);   //object[i] is pointing to values
// }
// for(let i in person){
//     console.log(i);   //i is pointing to name 
// }


/*The delete keyword deletes both the value of the property and the property itself.

After deletion, the property cannot be used before it is added back again.

The delete operator is designed to be used on object properties. It has no effect on variables or functions.

The delete operator should not be used on predefined JavaScript object properties. It can crash your application.*/


// const obj={
//     name:"aditya",
//     cars:[
//         {brand:"Wolkswagen", 
//          models:["virtus", "poloGT", "tiguan"]},

//         {brand:"Toyota", 
//          models:["fortuner", "innova", "camry"]},

//         {brand:"Ford", models:["fiesta",
//          "endeavour", "aspire"]}
//     ]
// }

// let x="";
// for(let i in obj.cars){
//     x+=obj.cars[i].brand;
//     for(let j in obj.cars[i].models){
//         x+=obj.cars[i].models[j];
//     }
// }
// console.log(x);


// function func(...x){
//     return x;
// }
// let x=func(100,200,300,400,500);
// console.log(x);



// const obj={
//     name:"aditya",
//     class:12
// }
// function func(myobj){
//     return myobj.name;
// }
// console.log(func(obj));


/*destructuring of objects basically reduces the need to write obj.property format everytime we use it. it 
basically extracts the properties form the object and increases reusability. very highly used in API calling
and react framework */

// const obj={
//     name:"aditya",
//     class:12,
//     age:20
// }
// const{name:n}=obj;
// console.log(n);



// const obj={
//     name:"aditya", class:12, age:20
// }
// obj.func=function(){
//     return [this.name, this.age];
// }
// console.log(obj.func());


//API stands for Application programming interface, used to make tasks easier, dependencies are in json format.



