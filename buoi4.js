// 21 : Ternary operator
// const a = 7
// const b = 6

// a > b = 1
// a < b = -1
// a = b = 0
// if (a > b){
//     console.log("A lon hon B")
// }else{
//     console.log("A be hoac bang B")
// }
// const result = a > b ? 1 : a < b ? -1 : 0
// console.log(result)

// 22 : Function scope

// var a = 1
// function random(){
//   var a = Math.random()
//   console.log(a)
// }
// random()
// console.log(a)

// var a = 1
// function random(){
//   var a = Math.random()
//   var b = 5
// }
// random()
// console.log(b)

// var a = 1;

// var b = {
//   a: 2,
//   foo: function() {
//     console.log(this.a);
//   }
// };

// b.foo();

// var fooCopy = b.foo;
// fooCopy();
// console.log(this)

// 23 : Phan biet var let const

// if(true){
//     let a = 10
// }
// console.log(a)

// 24 : Function context and bind

// var mouse = {
//     name : 'Mickey',
//     sayhi : function() {
//       console.log('Hi, my name is' , this.name)
//     }
//   }
  
// var sayCoppy = mouse.sayhi.bind(mouse)
// sayCoppy()

function run(cb){
    console.log('run...')
    cb()
  }
  
const mouse = {
    name : 'Mickey',
    run : function() {
        console.log(this.name + ' is running')
    }
}

run(mouse.run.bind(mouse))
  
  




