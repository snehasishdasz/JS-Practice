// console.log("Hello World");
// function sayHello(a,b) {
//   return a+b;
// }
// let xyz=sayHello(2,1,6);
// console.log(xyz)


// function addNumber(){
//   console.log(arguments)
//   let ans = 0;
//   for(let i=0;i<arguments.length;i++){
//     ans=ans+arguments[i]
//   }
//   return ans;
// }
// let result=addNumber(10,22,14,23)
// console.log(result)


// function addNumberv2(...arr){//Spread Operator
//   let ans = 0;
//   for(let i=0;i<arr.length;i++){
//     ans=ans+arr[i]
//   }
//   return ans;
// }
// let resultv2=addNumberv2(10,50,14,23);
// console.log(resultv2)

// const sayHello = () =>{
//   console.log("Hello World")
// }
// sayHello()

// const add = (a,b) => a+b;
// console.log(add(2,3))

//Argument is not work in arraow function , in arrow function we can use spread operator

//HOISTING
// sayHello()
// function sayHello(){
//   console.log("Hello World")
// }
//hoisting means we can execute anything first and if we intialize it later then it will run without any error

//But HOISTING is only work with normal function , it will not work in arrow function

//THIS keyword
const obj = {
    value: 20,
    myFunction: function(){
      console.log(this.value)
    }
  }
  //but in case of arrow function it will work but it refer to window object
  obj.myFunction()