function index() {
    console.log("outer========", outer)
}
function test() {
    if (false) {
        function index() {
            console.log("inner========", inner)
        }
    }
    index()
}
test()
