// //1 Задание
// function ShowSuccessMessage(message) 
// {
//     console.log(message);
// }
// function ShowErrorMessage(errorMessage) 
// {
//     console.log(errorMessage);
// }

// function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback)
// {
//     if (text.indexOf(errorSymbol) === -1)
//     {
//         successCallback("В данном тексте нет запрещенных символов");
//     }
//     else
//     {
//         const textArray = text.split("");
//         for (let index = 0; index < textArray.length; index++) {
//             if (textArray[index] === errorSymbol)
//             {
//                 errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${index}.`);       
            
//             }
//         }
//     }   
// }
// const text = 'Привет! Как дела! Давно мы с тобой не виделись.';

// checkTextOnErrorSymbol(text, 'а', ShowSuccessMessage, ShowErrorMessage);


// //2 Задача

function getRandomNumberInRange(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function startGame(heroPlayer, enemyPlayer)
// {
//     while(heroPlayer.health > 0 && enemyPlayer.health > 0)
//     {
//         let hit = getRandomNumberInRange(0,1);
//         hit === 0 ? heroPlayer.hitEnemy(enemyPlayer) : enemyPlayer.hitEnemy(heroPlayer);
//     }
//     const winner = heroPlayer.health > 0 ? heroPlayer : enemyPlayer;

//     alert(`${winner.name} победил! У него осталось ${winner.health} здоровья`);

// }

// const hero = 
// {
//     name: 'Batman',
//     health: 100,
//     hitEnemy(enemy)
//     {
//         enemy.health -= 10;
//     }
// }
// const enemy = 
// {
//     name: 'Joker',
//     health: 100,
//     hitEnemy(enemy)
//     {
//         enemy.health -= 10;
//     }
// }

// startGame(hero, enemy);


// //3 Задача
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// //3.1
// let userName = prompt("Введите имя");
// people1.find((element) => {return element === userName}) ? people2.push(userName) : people2;

// //3.2
// let userName2 = prompt("Введите имя");
// let index = array.indexOf(userName2);
// if (index !== -1) {
//   array.splice(index, 1);
// }

// //3.3
// const mapArray = [];
// for (let i = 0; i < people1.length; i++)
// {
//     for( let j = 0; j < people2.length; i++)
//     {
//         if(people1[i] === people2[j])
//         {
//             mapArray.push(people1[i]);
//         }
//     }
// }
// console.log(mapArray);
// //3.4

// const setArray = [...new Set([...people1, ...people2])];
// console.log(setArray);


//4
console.clear();
const num = 0;
const randomNumberContainer = document.createElement("div");
randomNumberContainer.classList.add("rnContainer");

const rnHeader = document.createElement("h3");
rnHeader.textContent = "Random Number:"


const randomNumber = document.createElement("p");
randomNumber.classList.add("rand-number");

function getRandomNumber() 
{
    randomNumber.textContent = Math.floor(Math.random() * (9999999 - 0 + 1)) + 0;
}
const rndButton = document.createElement("button");
rndButton.classList.add("rndBtn");
rndButton.textContent = "Generate random number";
rndButton.addEventListener("click", getRandomNumber);


randomNumberContainer.append(rnHeader, randomNumber, rndButton);
randomNumberContainer.style.backgroundColor = "#FBF2E9";
randomNumberContainer.style.borderRadius = "3vh";
randomNumberContainer.style.margin = "3vh";
randomNumberContainer.style.padding = "5vh";

document.body.append(randomNumberContainer);


//5 Задание
const redButton = document.createElement("button");
redButton.textContent = "Make me red";
redButton.style.border = "none";
redButton.style.backgroundColor = "black";
redButton.style.color = "white";
redButton.style.borderRadius = "10vh"
redButton.style.width = "10%";
redButton.style.margin = "1vh";

const greenButton = document.createElement("button");
greenButton.textContent = "Make me green";
greenButton.style.border = "none";
greenButton.style.backgroundColor = "black";
greenButton.style.borderRadius = "10vh";
greenButton.style.color = "white";
greenButton.style.margin = "1vh";
greenButton.style.width = "10%";

redButton.addEventListener("click", () => { redButton.style.backgroundColor = "red"; });
greenButton.addEventListener("click", () => { greenButton.style.backgroundColor = "green"; });

document.body.append(redButton, greenButton);

//6 Задание
const bgColor = "black";
const formContainer = document.createElement("div");
formContainer.classList.add("formContainer");


const colorInput = document.createElement("input");
colorInput.classList.add("formInput");
colorInput.placeholder = "Enter your color";

const colorBtn = document.createElement("button");
colorBtn.textContent = "Change color";
colorBtn.style.padding = "1vh";
colorBtn.style.margin = "1vh";
colorBtn.addEventListener("click", () => { formContainer.style.backgroundColor = colorInput.value; })
formContainer.append(colorInput, colorBtn);

document.body.append(formContainer);



//7 Задание

const blocksContainer = document.createElement("div");
blocksContainer.classList.add("blocksContainer")
const list = document.createElement("ul");
function createColorDiv(color)
{
    const div = document.createElement("div");
    div.color = color;
    div.style.borderRadius = "3vh";
    div.style.margin = "3vh";
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.backgroundColor = div.color;
    const li = document.createElement("li");
    li.textContent = div.color;
    div.addEventListener("click",() => { list.append(li) })
    return div;
}

blocksContainer.append(createColorDiv("red"), createColorDiv("green"), createColorDiv("blue"), createColorDiv("purple"));



document.body.append(blocksContainer, list);





