function call() {
    window.alert('hello...')
}

window.addEventListener(
    'DOMContentLoaded',
    function () {
        var btnObj = document.getElementById('btnClick')
        btnObj.addEventListener('click', call)

        setTimeout(
            () => {
                var headerObj = document.getElementById('mainHeader')
                headerObj.innerText = "Welcome to DOM and JS"
            },
            2000
        )
    }
)


