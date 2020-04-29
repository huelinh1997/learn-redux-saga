console.log('generator in generator')

function* add() {
    yield 'center'
}

// cach 1
// function* printName() {
//     yield 'start'
//     const center = add()
//     yield center.next().value
//     yield 'end'
// }

// cach 2
function* printName() {
    yield 'start'
    yield* add()  // nhường quyền cho printname 
    yield 'end'
}

const show = printName()
console.log(show.next())
console.log(show.next())
console.log(show.next())