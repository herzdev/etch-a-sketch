const container = document.querySelector(".container");


//Create sub-containers, within container
for(let i = 1; i <= 10; i++) {
    const subContainer = document.createElement("div");
    subContainer.className = "sub-container";
    container.appendChild(subContainer);
}

const subContainer = document.querySelectorAll(".sub-container");
console.log(subContainer);

//Add container items to sub-containers
subContainer.forEach((subcontainer) => {
    for(let i = 1; i <= 10; i++) {
        const newDivElement = document.createElement("div");
        newDivElement.className = "container-item";
        // newDivElement.setAttribute("style", "background-color: blue");
        subcontainer.appendChild(newDivElement);
    }
});

