import {BASE, EL1, EL2, SAUCE} from "./constants.js"

const bases = [];
const el1s = [];
const el2s = [];
const sauces = [];

let resultPrice = 0;
const orderButton = document.getElementById("openModalButton");
const priceElement = document.getElementById('res_price');
setInterval(() => {
    priceElement.textContent = `${resultPrice}`;
    if (bases.length > 0 && el1s.length > 0 && el2s.length > 0 && sauces.length > 0)
    {
        orderButton.disabled = false;
    }
    else
    {
        orderButton.disabled = true;
    }
}, 1);
const allBases = document.querySelectorAll(".base");
allBases.forEach((item) => 
{ 
    item.addEventListener("click", () => 
    {
        console.log(bases.length)
        const elList = document.getElementById("baseName");
        if (bases.length === 0)
        {
            const basesImg = document.getElementById("base");
            basesImg.style.zIndex = "1000"
            bases.push(item);
            resultPrice += BASE[Array.from(allBases).indexOf(item)];
            const choosedElement = document.createElement("div");
            choosedElement.classList.add("selected_base");
            choosedElement.textContent = item.textContent;
            elList.append(choosedElement);            
        }
    });
});

const allEl1 = document.querySelectorAll(".el1");
allEl1.forEach((item) => { 
    item.addEventListener("click", () => 
    {
        const elList = document.getElementById("firstEl");
        if (el1s.length < 2)
        {
            const basesImg = document.getElementById("el1");
            basesImg.style.zIndex = "1000"
            el1s.push(item);
            resultPrice += EL1[Array.from(el1s).indexOf(item)];
            const choosedElement = document.createElement("div");
            choosedElement.classList.add("selected_element1")
            choosedElement.textContent = item.textContent;
            elList.append(choosedElement);            
        }
    });
});

const allEl2 = document.querySelectorAll(".el2");
allEl2.forEach((item) => { 
    item.addEventListener("click", () => 
    {
        const elList = document.getElementById("secondEl");
        if (el2s.length < 2)
        {
            const basesImg = document.getElementById("el2");
            basesImg.style.zIndex = "1000"
            el2s.push(item);
            resultPrice += EL2[Array.from(el2s).indexOf(item)];
            const choosedElement = document.createElement("div");
            choosedElement.classList.add("selected_element2")
            choosedElement.textContent = item.textContent;
            elList.append(choosedElement);            
        }
    });
});

const allSauces = document.querySelectorAll(".sauce");
allSauces.forEach((item) => 
{ 
    item.addEventListener("click", () => 
    {
        const elList = document.getElementById("saucesEl");
        if (sauces.length === 0)
        {
            const basesImg = document.getElementById("sauce");
            basesImg.style.zIndex = "1000"
            sauces.push(item);
            resultPrice += SAUCE[Array.from(sauces).indexOf(item)];
            const choosedElement = document.createElement("div");
            choosedElement.classList.add("selected_sauce")
            choosedElement.textContent = item.textContent;
            elList.append(choosedElement);            
        }
    });
});

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

document.getElementById('openModalButton').addEventListener('click', openModal);
document.getElementById('close').addEventListener('click', closeModal);