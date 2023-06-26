const container = document.querySelector(".container");

function clearGrid() {
    const subContainer = document.querySelectorAll(".sub-container");
    subContainer.forEach((subContainer) => {
        container.removeChild(subContainer);
    });
}

function createGrid(length=16) {

    //Create sub-containers, within container
    for(let i = 1; i <= length; i++) {
        const subContainer = document.createElement("div");
        subContainer.className = "sub-container";
        container.appendChild(subContainer);
    }

    const subContainer = document.querySelectorAll(".sub-container");

    //Add container items to sub-containers
    subContainer.forEach((subcontainer) => {
        for(let i = 1; i <= length; i++) {
            const newDivElement = document.createElement("div");
            newDivElement.className = "container-item";
            // newDivElement.setAttribute("style", "background-color: blue");
            subcontainer.appendChild(newDivElement);
        }
    });
    createMouseOverEventListener();
}

//Add EventListener to div and change its background color on mouseover
function createMouseOverEventListener() {

    const allContainerItems = document.querySelectorAll(".container-item");

    allContainerItems.forEach((containerItem) => {
        containerItem.addEventListener("mouseover", () => {
            containerItem.setAttribute("style", "background-color: grey");
        });
    });
}

createGrid();

//Resize Grid depending on user input
const resizeBtn = document.querySelector(".resizeBtn"); 

resizeBtn.addEventListener("click", () => {
    
    let userInput;
    
    do {
        userInput = Number(prompt("Welche Anzahl für Höhe und Länge? (e.g. 10, 20, 30) ", 16));
        if(userInput >= 100) {
            alert("Die Zahl ist zu hoch, bitte wähle eine niedrigere Zahl aus! (unter 100)");
        }        
    } while(userInput >= 100);

    clearGrid();
    createGrid(userInput);

});


