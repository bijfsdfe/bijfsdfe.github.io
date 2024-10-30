const meinCoolerButton = document.getElementById("btn");
const meinCoolerButton2 = document.getElementById("btn2");
const meinCoolerText = document.getElementById("txt");
const meinCoolerTextBox = document.getElementById("tb");

meinCoolerButton.addEventListener("click", function() {
    let wert = meinCoolerTextBox.value;

    if (wert === "654") {
        wert = meinCoolerText.innerText = "Du bist cool";
    } else if (wert === "123") {
        wert = meinCoolerText.innerText = "Du Nicht bist cool";
    } else {
        wert = meinCoolerTextBox.value;
    }
    

    hallo(wert);
});

meinCoolerButton2.addEventListener("click", function() {
    const wert = meinCoolerTextBox.value + " ist cool";
    hallo(wert);
});

/* setInterval(() => {
    const wert = meinCoolerTextBox.value;
    meinCoolerText.innerText = `Hallo, ${wert}`
}, 6000); */

function hallo(name) {

    if (name === "") {
        name = "Das Feld ist lehr!";

        setTimeout(() => {
            name = "Hi";

            setTimeout(() => {
                meinCoolerText.innerText = `${name}`;
            }, 100);

        }, 2900);


    }

    meinCoolerText.innerText = `Hallo, ${name}`;
}