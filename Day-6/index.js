//*FOR EACH

//foreach never return anything
const students = ["Bikash","Ankita","Rahul","Rohit","Raj"]

function print(n){
  console.log(n + "DAS")
}

students.forEach(print)

//We can also do it

 // students.forEach((val)=>(console.log(val + "Das")))



 //*.MAP
// students.map((val)=>console.log(val))

// const number = [1,2,3,4,5,6,7,8,9,10]
// let newArr = [];
// number.forEach((num)=>newArr.push(num*2))
// console.log(newArr)


//?Map is also use to manipulate the array
//? here we have to create an array and store our result into it by push one by one element but incase of MAP it automatically return an array

//? in for each it cant return anything but in map it return an array

const number = [1,2,3,4,5,6,7,8,9,10]
// const double=(num) =>{
//   return num*2
// }

// let newArr=number.map(double)
// console.log(newArr)


//Different array function
// let ans = number.find((num) => num == 4);
// console.log(ans)

// let ans = number.findIndex((num) => num == 4);
// console.log(ans)

// const newArr = number.filter((num)=>num%2==0)
// console.log(newArr)

// let newArr = number.slice(1,5)
// console.log(newArr) //OP=[ 2, 3, 4, 5 ]


//splice simply delete the element from the array
// let newArr = number.splice(1,4)
// console.log(newArr) //OP-[ 2, 3, 4, 5 ]
// console.log(number) //OP-[ 1, 6, 7, 8, 9, 10 ]
