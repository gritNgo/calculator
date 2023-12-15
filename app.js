function Calculator() {
    this.operations = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    }; 

    this.operate = function(str) { 
        const split = str.split(" "),
        a = +split[0],
        op = split[1],
        b = +split[2]
    }
    
    console.log(add(3, 9))
}