const startTime = +new Date()

for (let i = 0; i < 10000000; i++) {
    const a = {
        a: 1,
        b: 2,
        c: 3
    }
    a.b = undefined
    // delete a.b
}
const endtime = +new Date()
console.log("endtime-startTime========", endtime-startTime)
