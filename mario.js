const button = document.getElementById("button");
button.addEventListener("click", determineHeightAndThenDrawPyramid);

const pyramid = document.getElementById("pyramid");

function determineHeightAndThenDrawPyramid() {

    pyramid.innerHTML = "";

    let rowStr = "";

    const height = document.getElementById("height").value;

    for (let i = 0; i < (height); i++) {

        for ( let j = i; j < (height - 1); j++) {
            rowStr += ".";
        }

        for (let j = 0; j < (i + 2); j++) {
            rowStr += "#";
        }
       
        const row = document.createElement("p");
        row.innerText = rowStr;
        pyramid.appendChild(row);

        rowStr = "";

        }


}
