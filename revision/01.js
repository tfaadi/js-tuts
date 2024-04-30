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



let obj1={
    name:"aditya"
}
let obj2={
    class:12
}
let obj3=Object.assign({}, obj1, obj2);
console.log(obj3);