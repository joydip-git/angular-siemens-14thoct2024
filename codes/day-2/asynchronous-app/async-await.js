const divide = async (a, b) => {
    const res = a / b
    if (res === Infinity)
        throw new Error('divisor should not be zero')
    else
        return res
}

const add = (a, b) => a + b

async function callDivide() {
    try {
        const divRes = await divide(12, 3)
        console.log(divRes);
    } catch (error) {
        error => console.log(error)
    }
}
callDivide()

//const divPromise = divide(12, 3)
// divPromise
//     .then(divRes => console.log(divRes))
//     .catch(e => console.log(e))
//     .finally(() => {
//         //clean-up code
//     }
//     )

const addRes = add(12, 3)
console.log(addRes);

console.log('all over');