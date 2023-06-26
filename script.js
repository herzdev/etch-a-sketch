const container = document.querySelector(".container");


for(let i = 1; i <= 16; i++) {
    const divElement = document.createElement("div");
    divElement.className = "horizontal";
    container.appendChild(divElement);
    console.log(i);
}


