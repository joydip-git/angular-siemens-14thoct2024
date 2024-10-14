interface ISome {
    get path();
    set path(value: string);
}
abstract class Abstraction<T, TResult> implements ISome {
    constructor(private _path: string) { }
    get path(): string {
        return this._path
    }
    protected set path(value: string) {
        this._path = value
    }

    abstract add(a: T, b: T): TResult;
}
interface Operations<T> {
    subtract(a: T, b: T): number;
}
class Implementation extends Abstraction<number, number> implements Operations<number> {
    subtract(a: number, b: number): number {
        return a - b;
    }
    add(a: number, b: number): number {
        return a + b
    }
}

interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

const products: Product[] = [
    {
        id: 1,
        name: '',
        price: 100,
        description: ''
    }
]

function add<T>(a: T, b: T, c = 0) {

}
add(12, 13);



