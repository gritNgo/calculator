function calculator() {
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
    
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }  
}

const display = document.querySelector(".display");
const buttons = [...document.querySelectorAll("operands-btn")];
// const values = buttons.map(button => button.textContent)

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
    })
})


// document.querySelectorAll('.operands-btn').forEach(el =>{
//     el.addEventListener('click', () =>{
//       digit_pressed(el.textContent);
//     });
//   });
//   function digit_pressed(digit) {
//     console.log(digit);
//   }

