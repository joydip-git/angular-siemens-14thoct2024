function call() {
    //console.log(x);// undefined
    let x //var x
    x = 10
    //this.y = 20
    console.log(x);//10
    for (let i = 0; i < 1; i++) {
        let x //var _x
        x = 20
        console.log(x);//20
    }
    console.log(x);//10
}
call()