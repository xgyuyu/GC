function *a() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}
let b = a();
console.log('script start')
console.log(b.next());

async function async1() {
  await async2()
  console.log('async1 end')
  console.log(b.next());
}
async function async2() {
  console.log('async2 end')
}
async1()
setTimeout(function() {
  console.log('setTimeout')
}, 0)
new Promise(resolve => {
 console.log('Promise')
  console.log(b.next());
  resolve()
}).then(function() {
 console.log('promise1')
}).then(function() {
  console.log('promise2')
  console.log(b.next());
})
console.log(b.next());
console.log('script end')

// new Promise(function (resolve) {
//   console.log('1')
//   resolve()
//   console.log('2')
// }).then(function () {
//   console.log('3')
// })
// setTimeout(function(){
//   console.log('settimeout')
// })
// console.log('4')
