const container = document.querySelector(".container");

function createGrid(length=16) {

    //Create sub-containers, within container
    for(let i = 1; i <= length; i++) {
        const subContainer = document.createElement("div");
        subContainer.className = "sub-container";
        container.appendChild(subContainer);
    }

    const subContainer = document.querySelectorAll(".sub-container");
    console.log(subContainer);

    //Add container items to sub-containers
    subContainer.forEach((subcontainer) => {
        for(let i = 1; i <= length; i++) {
            const newDivElement = document.createElement("div");
            newDivElement.className = "container-item";
            // newDivElement.setAttribute("style", "background-color: blue");
            subcontainer.appendChild(newDivElement);
        }
    });
}

createGrid();

//Add EventListener to div and change its background color on mouseover
const allContainerItems = document.querySelectorAll(".container-item");

allContainerItems.forEach((containerItem) => {
    containerItem.addEventListener("mouseover", () => {
        containerItem.setAttribute("style", "background-color: grey");
    });
});



