function* generatorFunction() {
   while(true) {
       yield 'im listening'
   }
} 

const iterator = generatorFunction()
console.log('result 1: ', iterator.next())
console.log('result 2: ', iterator.next())