
// Hide all the outputs at the start //
document.getElementById('output1').style.visibility = 'hidden';
document.getElementById('output2').style.visibility = 'hidden';
document.getElementById('output3').style.visibility = 'hidden';
document.getElementById('output4').style.visibility = 'hidden';

document.getElementById('choosenInput').addEventListener('change', getSelectedOption);

// Needed to get choosen unit //
function getSelectedOption() {
    const select = document.getElementById('choosenInput');

    const opt = select.options[select.selectedIndex].text;
    
    // will convert based off desired unit //
    document.getElementById('unitInput').addEventListener('input', function(e){
        // Will convert if pounds is choosen
        if(opt === "Pounds") {
            document.getElementById('output1').style.visibility = 'visible';
            document.getElementById('output2').style.visibility = 'visible';
            document.getElementById('output3').style.visibility = 'visible';
            const lbs = e.target.value;

            // Get grams //
            document.getElementById('gramsOutput').innerHTML = (lbs / 0.0022046).toFixed(3);
            // Get kg //
            document.getElementById('kgOutput').innerHTML = (lbs / 2.2046).toFixed(3);
            // Get Ounces //
            document.getElementById('ozOutput').innerHTML = (lbs *16).toFixed(3);

        } else if (opt === "Grams") { // Convert if Grams choosen
            document.getElementById('output2').style.visibility = 'visible';
            document.getElementById('output3').style.visibility = 'visible';
            document.getElementById('output4').style.visibility = 'visible';
            const grams = e.target.value;

            // Get kg //
            document.getElementById('kgOutput').innerHTML = (grams / 1000).toFixed(3);
            // Get ounces //
            document.getElementById('ozOutput').innerHTML = (grams / 28.35).toFixed(3);
            // Get pounds //
            document.getElementById('lbOutput').innerHTML = (grams / 453.592).toFixed(3);
        } else if (opt === "Kilograms") { // Convert if Grams choosen
            document.getElementById('output1').style.visibility = 'visible';
            document.getElementById('output3').style.visibility = 'visible';
            document.getElementById('output4').style.visibility = 'visible';
            const kg = e.target.value;

            // Get grams //
            document.getElementById('gramsOutput').innerHTML = (kg * 1000).toFixed(3);
            // Get ounces //
            document.getElementById('ozOutput').innerHTML = (kg * 35.274).toFixed(3);
            // Get pounds //
            document.getElementById('lbOutput').innerHTML = (kg * 2.205).toFixed(3);
        } else if (opt === "Ounces") { // Convert if Grams choosen
            document.getElementById('output1').style.visibility = 'visible';
            document.getElementById('output2').style.visibility = 'visible';
            document.getElementById('output4').style.visibility = 'visible';
            const ounces = e.target.value;

            // Get grams //
            document.getElementById('gramsOutput').innerHTML = (ounces * 28.35).toFixed(3);
            // Get ounces //
            document.getElementById('kgOutput').innerHTML = (ounces / 35.274).toFixed(3);
            // Get pounds //
            document.getElementById('lbOutput').innerHTML = (ounces / 16).toFixed(3);
        } 
    });

}