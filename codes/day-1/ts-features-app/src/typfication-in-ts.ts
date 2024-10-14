var a = 10
console.log(a);

type addtype = number | undefined | null

const add = (a: number, b: number): addtype => {
    return a + b
}
type fnRefType = (x: number, y: number) => addtype

const invoke = (fnRef: fnRefType, a: number, b: number): void => {
    const res = fnRef(a, b)
    console.log(res);
}
invoke(add, 10, 20)

console.log('end of code');