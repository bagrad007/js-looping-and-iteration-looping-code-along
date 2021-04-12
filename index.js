function writeCards(people, event) {
    let arr = []
    for (let i = 0; i < people.length; i++) {

        arr.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`)

    }
    return arr
}

function countDown(num) {
    for (let i = num; i > -1; i--) {
        console.log(i)
    }
}