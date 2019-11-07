
// Hide all the outputs at the start //
document.getElementById('output').style.visibility = 'hidden';

document.getElementById('choosenInput').addEventListener('change', getSelectedOption);

// Disable the enter key from reloading the entire page //
document.getElementById('unitForm').addEventListener('submit', function(e) {
    e.preventDefault();
}, false);

// Needed to get choosen unit //
function getSelectedOption() {
    const select = document.getElementById('choosenInput');

    const opt = select.options[select.selectedIndex].text;
    
    // will convert based off desired unit //
    document.getElementById('unitInput').addEventListener('input', function(e){
        // Will convert if pounds is choosen
        if(opt === "Pounds") {

            document.getElementById('output').style.visibility = 'visible';
            // gets the pounds inputted and stores it as a value //
            const lbs = e.target.value;

            // Get grams //
            document.getElementById('text-output1').innerHTML = 'Grams: ';
            document.getElementById('output1').innerHTML = (lbs / 0.0022046).toFixed(3);
            // Get kg //
            document.getElementById('text-output2').innerHTML = 'Kilograms: ';
            document.getElementById('output2').innerHTML = (lbs / 2.2046).toFixed(3);
            // Get Ounces //
            document.getElementById('text-output3').innerHTML = 'Ounces: ';
            document.getElementById('output3').innerHTML = (lbs *16).toFixed(3);
            
            reset.restartInput();

        } else if (opt === "Grams") { // Convert if Grams choosen

            document.getElementById('output').style.visibility = 'visible';
            // gets the grams inputted and stores it as a value //
            const grams = e.target.value;

            // Get kg //
            document.getElementById('text-output1').innerHTML = 'Kilograms: ';
            document.getElementById('output1').innerHTML = (grams / 1000).toFixed(3);
            // Get ounces //
            document.getElementById('text-output2').innerHTML = 'Ounces: ';
            document.getElementById('output2').innerHTML = (grams / 28.35).toFixed(3);
            // Get pounds //
            document.getElementById('text-output3').innerHTML = 'Pounds: ';
            document.getElementById('output3').innerHTML = (grams / 453.592).toFixed(3);

            reset.restartInput();

        } else if (opt === "Kilograms") { // Convert if Grams choosen

            document.getElementById('output').style.visibility = 'visible';
            // gets the kg inputted and stores it as a value //
            const kg = e.target.value;

            // Get grams //
            document.getElementById('text-output1').innerHTML = 'Grams: ';
            document.getElementById('output1').innerHTML = (kg * 1000).toFixed(3);
            // Get ounces //
            document.getElementById('text-output2').innerHTML = 'Ounces: ';
            document.getElementById('output2').innerHTML = (kg * 35.274).toFixed(3);
            // Get pounds //
            document.getElementById('text-output3').innerHTML = 'Pounds: ';
            document.getElementById('output3').innerHTML = (kg * 2.205).toFixed(3);

            reset.restartInput();

        } else if (opt === "Ounces") { // Convert if Grams choosen

            document.getElementById('output').style.visibility = 'visible';
            // gets the ounces inputted and stores it as a value //
            const ounces = e.target.value;

            // Get grams //
            document.getElementById('text-output1').innerHTML = 'Grams: ';
            document.getElementById('output1').innerHTML = (ounces * 28.35).toFixed(3);
            // Get kg //
            document.getElementById('text-output2').innerHTML = 'Kilograms: ';
            document.getElementById('output2').innerHTML = (ounces / 35.274).toFixed(3);
            // Get pounds //
            document.getElementById('text-output3').innerHTML = 'Pounds: ';
            document.getElementById('output3').innerHTML = (ounces / 16).toFixed(3);

            reset.restartInput();
        } 
    });
}

// A class that resets all the info 
class reset {
    // Get rid of inputted value when another unit is selected //
    static clearText() {
        document.getElementById('unitInput').value = '0';
    }
    // will set all the output to 0 to restart //
    static clearOutput() {
        document.getElementById('output1').innerHTML = '0';
        document.getElementById('output2').innerHTML = '0';
        document.getElementById('output3').innerHTML = '0';
    }

    // hide the outputs // 
    static hide() {
        document.getElementById('output').style.visibility = 'hidden';
    }

    // disable or enable to type in the text area //
    static disable() {
        document.getElementById('unitInput').readOnly = true;
    }

    static enable() {
        document.getElementById('unitInput').readOnly = false;
    }

    // clear input when unit has changed during execution //
    static restartInput() {
        document.getElementById('choosenInput').addEventListener('change', restartExc);
        let choosenInput = document.getElementById('choosenInput');
        function restartExc() {
            if (choosenInput.options[0].selected == true) {
                reset.disable();
                reset.clearText();
                reset.hide();
                reset.clearOutput();
            } else if (choosenInput.options[1].selected == true) {
                reset.enable();
                reset.clearText();
                reset.hide();
                reset.clearOutput();
            } else if (choosenInput.options[2].selected == true) {
                reset.enable();
                reset.clearText();
                reset.hide();
                reset.clearOutput();
            } else if (choosenInput.options[3].selected == true) {
                reset.enable();
                reset.clearText();
                reset.hide();
                reset.clearOutput();
            } else if (choosenInput.options[4].selected == true) {
                reset.enable();
                reset.clearText();
                reset.hide();
                reset.clearOutput();
            } else if (choosenInput.options[5].selected == true) {
                reset.enable();
                reset.clearText();
                reset.hide();
                reset.clearOutput();
            }
        }
    }
}
