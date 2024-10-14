//string, number, boolean, object, function
//undefined, NaN, null, Infinity

var x = 10
console.log(x, typeof x);

var y
console.log(y);

if (y)
    console.log((x + y), typeof (x + y));
else
    console.log('sorry');

x = 'joydip'
console.log(x, typeof x);

//declaration
function add(a, b) {
    return a + b
}

//expression
var subtract = function (a, b) {
    return a - b
}

// === (strict equality)
// !== (strict inequality)

//if (a == b) or if(a===b)

var a = 10
var b = 0


try {
    var res = a / b
    if (res === Infinity)
        throw new Error('error message')

    console.log(res);
} catch (error) {
    console.log(error);
}

