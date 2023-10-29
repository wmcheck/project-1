'use strict';

function test(a) {
  console.log(a)
}
console.log('start PROJECT-1')

setTimeout(()=> {
  console.log('script run')
  test('function test => a')
}, 1000)

setTimeout(()=> {
  console.log('stop script')
}, 3000)
