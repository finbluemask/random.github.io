


const containerMenu = document.getElementById("menu-container");
const menu = document.getElementById("menu");
const containerBox = document.getElementById("container-box");
const box = document.getElementById("box");


const points = document.getElementById("points");
const coins = document.getElementById("coins");
const score = document.getElementById("score");

const remove = document.getElementById("remove");

const mysteriousSkin = document.getElementById("mysterious-skin");
const skinAdventure = document.getElementById("skin adventure");
const aquaticSkin = document.getElementById("aquatic-skin");

const firstSkinPrice = document.getElementById("first-skin-price");
const secondSkinPrice = document.getElementById("second-skin-price");
const thirdSkinPrice = document.getElementById("third-skin-price");

const firstEquip = document.getElementById("first-equip");
const firstUnequip = document.getElementById("first-unequip");

const secondEquip = document.getElementById("second-equip");
const secondUnequip = document.getElementById("second-unequip");


const thirdEquip = document.getElementById("third-equip");
const thirdUnequip = document.getElementById("third-unequip");


const levelsBtn = document.getElementById("levels-btn");
const levelsContainer = document.getElementById("levels-container");

const clickSound = new Audio("./mouse-click-153941 (2).mp3");

let POINTS = 0;
let COINS = 0;
let SCORE = 0;
let LEVEL = 0;


let alertShown = false;

menu.addEventListener("click", function() {



    if(containerMenu.style.display === "none") {
        levelsContainer.style.display = "none";
        containerBox.style.display = "none";
        containerMenu.style.display = "flex"
        containerMenu.style.justifyContent = "center"
        containerMenu.style.alignItems = "center";
        containerMenu.style.flexDirection = "column";
    }  else {
        containerMenu.style.display = "none";
        containerBox.style.display = "flex"
    }

    

});


box.addEventListener("click", function() {
    clickSound.currentTime = 0;
    clickSound.play();
   points.textContent = POINTS++;
   coins.textContent = COINS+=115;
   score.textContent = SCORE++;

   rewards()
});



function rewards() {

   

    if(SCORE === 10) {
        alert("keep it up!");
    } else if(COINS >= 30 && !alertShown) {
        alert("can you buy something");
        alertShown = true;
    } else if(POINTS === 10) {
        alert("you can redeem something");
    } else if (SCORE === 50) {
        LEVEL = LEVEL +1;
        level.textContent = LEVEL;
    } else if(SCORE === 80) {
        LEVEL = LEVEL +1;
        level.textContent = LEVEL;
    }

}

remove.addEventListener("click", function() {
    containerMenu.style.display = "none";
    containerBox.style.display = "flex"
}) 



let firstSkinPurchased = localStorage.getItem('firstSkinPurchased') === 'true';
let secondSkinPurchased = localStorage.getItem('secondSkinPurchased') === 'true';
let thirdSkinPurchased = localStorage.getItem('thirdSkinPurchased') === 'true';



if(firstSkinPurchased) {
    firstSkinPrice.textContent = "bought";
    firstSkinPrice.style.color = "#ffee00"
    firstSkinPrice.style.textTransform = "uppercase";
}
if(secondSkinPurchased) {
    secondSkinPrice.textContent = "bought";
    secondSkinPrice.style.color = "#ffee00"
    secondSkinPrice.style.textTransform = "uppercase";
}
if(thirdSkinPurchased) {
    thirdSkinPrice.textContent = "bought";
    thirdSkinPrice.style.color = "#ffee00"
    thirdSkinPrice.style.textTransform = "uppercase";
}



mysteriousSkin.addEventListener("click", function() {
    if(COINS >= 100 && !firstSkinPurchased) {
        firstSkinPrice.textContent = "bought";
        firstSkinPrice.style.color = "#ffee00";
        COINS = COINS - 100;
        coins.textContent = COINS;
        firstSkinPrice.style.textTransform = "uppercase";
        firstSkinPurchased = true;
        localStorage.setItem('firstSkinPurchased', 'true');
    } else if (firstSkinPurchased){
       alert("you already have this skin!");
    } else {
        alert("you need more coins");
    }
});

firstEquip.addEventListener("click", function() {

    if(firstSkinPurchased) {
        box.style.background = "linear-gradient(0deg, rgba(188,0,255,1) 0%, rgba(0,0,0,1) 100%)";
        box.style.boxShadow = "0px 0px 15px 15px #d500ff";
    } else {
        alert("you need to buy this skin first!");
    }
});

firstUnequip.addEventListener("click", function() {
    box.style.background = "";
    box.style.boxShadow = "none";
});

skinAdventure.addEventListener("click", function() {
    if(COINS >= 500 && !secondSkinPurchased) {
        secondSkinPrice.textContent = "bought";
        secondSkinPrice.style.color = "#ffee00";
        COINS = COINS - 500;
        coins.textContent = COINS;
        secondSkinPrice.style.textTransform = "uppercase";
        secondSkinPurchased = true;
        localStorage.setItem('secondSkinPurchased', 'true');
    } else if(secondSkinPurchased){
        alert("you already have this skin!");
    } else {
        alert("you need more coins");
    }
}); 


secondEquip.addEventListener("click", function() {
    if(secondSkinPurchased) {
        box.style.background = "linear-gradient(0deg, rgba(255,132,0,1) 0%, rgba(255,179,0,1) 100%)";
        box.style.boxShadow = "0px 0px 10px 10px #fffc00";
    } else {
        alert("you need to buy this skin first!");

    }
});


secondUnequip.addEventListener("click", function() {
    box.style.background = "";
    box.style.boxShadow = "none";
});

aquaticSkin.addEventListener("click", function() {
    if(COINS >= 1000 && !thirdSkinPurchased) {
        thirdSkinPrice.textContent = "bought";
        thirdSkinPrice.style.color = "#ffee00";
        COINS = COINS - 1000
        coins.textContent = COINS;
        thirdSkinPrice.style.textTransform = "uppercase";
        thirdSkinPurchased = true;
        localStorage.setItem('thirdSkinPurchased', 'true');
    } else if(thirdSkinPurchased){
        alert("you already have this skin!");
  
    } else {
        alert("you need more coins");
    }
})


thirdEquip.addEventListener("click", function() {
    if(thirdSkinPurchased) {
        box.style.boxShadow = "0px 0px 10px 10px blue";
        box.style.background = "linear-gradient(0deg, rgba(3,0,255,1) 0%, rgba(0,202,255,1) 100%)"
    } else {
        alert("you need to buy this skin first!");
    }
});


thirdUnequip.addEventListener("click", function() {
    box.style.background = "";
    box.style.boxShadow = "none";
});


levelsBtn.addEventListener("click", function() {
    if(levelsContainer.style.display === "none") {
        levelsContainer.style.display = "flex";
        levelsContainer.style.justifyContent = "center";
        levelsContainer.style.alignItems = "center";
        levelsContainer.style.flexDirection = "column";
    } else {
        levelsContainer.style.display = "none";
    }
});