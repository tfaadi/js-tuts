const min=20
const max=30
console.log(Math.floor(Math.random()*(max-min+1)+min))
let mydate=new Date();
console.log(mydate.toJSON())
let second=1000*60
let minute=second*60
let day=minute*24
let mydate=new Date()
let newdate=(Date.now()/day);
let num=(mydate.getTime()/day);
console.log(newdate)
console.log(num)