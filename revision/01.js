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


const person={
    name:"aditya",
    class:12,
    age:20
}
for(let i in person){
    console.log(person[i]);   //object[i] is pointing to values
}
for(let i in person){
    console.log(i);   //i is pointing to name 
}
