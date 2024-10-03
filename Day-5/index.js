 //Highorder function and Callback
// function add(a, b,cb) {
//     let result = a + b;
//     cb(result);
//   }
//   add(2,4,function(val){
//     console.log(val);
//   })

  
//*Example 1
function a(b){
    console.log(b);
    b()
  }
  function sayhii(){
    console.log("hii");
  }
  a(sayhii);//sayhi is call back function and "a" is highorder function

  //example
  a(function(){
    console.log("ok i am fine");//This is called anonymous function
  })
  


  //*Example 2
  function add(a,b,cb){
    let result = a+b;
    cb(result)
  }
  function thrdfunc(result){
    console.log(result);
  } 
  add(4,2,thrdfunc)
  
//   Callback is a function a function which was taken as aargument in higher order function
//   Highorder function is a function which take function as an argument and execute it