const divide = (a, b) => {
    const p = new Promise(
        //executor function
        (resolveFnRef, rejectFnRef) => {
            const res = a / b
            if (res === Infinity) {
                const err = new Error('divisor should not be zero')
                rejectFnRef(err)
            }
            resolveFnRef(res)
            //return res
        }
    )
    return p;
}

const add = (a, b) => a + b

const divPromise = divide(12, 3)
divPromise
    .then(
        (divRes) => { console.log(divRes) },
        (e) => { console.log(e); }
    )

const addRes = add(12, 3)
console.log(addRes);

console.log('all over');