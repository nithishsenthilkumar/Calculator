let display = document.getElementById('display');
console.log(display);
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);

buttons.map( button => {
    button.onclick = (e) => {
        switch(e.target.innerHTML){
            case 'C':
                display.innerHTML = '';
                break;
            case '=':
                try{
                    display.innerHTML = eval(display.innerHTML);
                } catch {
                    display.innerHTML = "Error"
                }
                break;
            case '←':
                if (display.innerHTML){
                   display.innerHTML = display.innerHTML.slice(0, -1);
                }
                break;
            default:
                display.innerHTML += e.target.innerHTML;
        }
    };
});
