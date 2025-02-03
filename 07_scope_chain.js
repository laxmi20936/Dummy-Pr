const a = 123123456
function b () {
    var a = 12783

    c()
    function c() {
    console.log(a)
    }
}

b()
console.log(a)