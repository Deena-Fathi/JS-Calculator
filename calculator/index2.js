let currDis = document.getElementById('current_display');
let prevDisp = document.getElementById('previous_display');
let buttons = Array.from(document.getElementsByClassName('all_buttons'));
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                currDis.innerText = '0';
                prevDisp.innerText = '0'
                break;

            case '=':
                try {
                    prevDisp.innerText = eval(currDis.innerText);
                    currDis.innerText = ''
                } catch {
                    currDis.innerText = "Error"
                }
                break;

            case 'CE':
                currDis.innerText = currDis.innerText.slice(0, -1);
                break;

            default:
                if (currDis.innerText == "0" || currDis.innerText == "Error") currDis.innerText = '';
                currDis.innerText += e.target.innerText;

        }
    });
});