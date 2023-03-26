// /////////////////////////CHAPTER 14 NEW CHAPTER!!!///////////////////
// What is buffer?
// Node Js needs a buffer to work as a temp memory..just like ram

// JS is a async language:
// NODE is a async language:
// PHP is a SYNC language:

// In Sync programming language, 1 operation task is performed at a single time.
// Each Task wait for the completion of the previous task
// Speed is low compartiverly

// In Async programming language, multiple operation task can be performed at a single time.
// Task do not wait for each other for completion
// Speed is good compartiverly

// example of Asynchronous programming language

let a = 10;
let b = 29;

setTimeout(()=>{b= 1000
console.log("Executed successfully!")},2000)

console.log(a+b);

//////////////////////////////////////////////////////////////////////////////
// Preventing the async nature of node

let a = 50
let b = 0
console.log("First answer is: "+ (a+b))

//promise
let waitingData = new Promise ((resolve, reject)=>
{
    setTimeout(()=>{resolve(50)},2000)
})

waitingData.then((data)=>{
console.log("New answer is"+(a+data))})

