
document.addEventListener("DOMContentLoaded", function() {
    buttonOkAlert.style.display = "none"
    playBtn.style.display = "block";
    alertP.textContent = "welcome to block clicker";
    alertP.style.fontSize = "20px";
    alertP.style.textTransform = "uppercase"
    alertBox.style.display = "flex";
    alertBox.style.justifyContent = "center";
    alertBox.style.alignItems = "center";
    alertBox.style.flexDirection = "column";
});



const containerMenu = document.getElementById("menu-container");
const menu = document.getElementById("menu");
const containerBox = document.getElementById("container-box");
const box = document.getElementById("box");


const points = document.getElementById("points");
const coins = document.getElementById("coins");
const score = document.getElementById("score");
const level = document.getElementById("level");

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

const playBtn = document.getElementById("play");
const musicGame = new Audio("./just-chill-114854.mp3");
playBtn.addEventListener("click", function() {
    musicGame.play();
    alertBox.style.display = "none";
});

musicGame.addEventListener("ended", function() {
    this.currentTime = 0; 
    this.play(); 
});


/*CHECKS RANGES*/ 
const firstCheck = document.getElementById("first-check");
const secondCheck = document.getElementById("second-check");
const thirdCheck = document.getElementById("third-check");
const fourthReward = document.getElementById("fourth-reward");
const fifthReward = document.getElementById("fifth-reward");

/*CLICK SOUND*/
const clickSound = new Audio("./mouse-click-153941 (2).mp3");

/*ALERT BOX*/

const alertBox = document.getElementById("alert-box");
const alertP = document.getElementById("alert-p")
const buttonOkAlert = document.getElementById("ok");

let POINTS = 0;
let COINS = 0;
let SCORE = 0;
let LEVEL = 0;


/*REWARD LEVELS*/ 
const firstReward = document.getElementById("first-reward");
const secondReward = document.getElementById("second-reward");
const thirdReward = document.getElementById("third-reward");

let alertShown = false;

menu.addEventListener("click", function() {



    if(containerMenu.style.display === "none") {
        levelsContainer.style.display = "none";
        containerBox.style.display = "none";
        containerMenu.style.display = "flex"
        containerMenu.style.justifyContent = "center"
        containerMenu.style.alignItems = "center";
        containerMenu.style.flexDirection = "column";
        containerMenu.style.gap = "20px";
    }  else {
        containerMenu.style.display = "none";
        containerBox.style.display = "flex"
    }

    

});


box.addEventListener("click", function() {
    clickSound.currentTime = 0;
    clickSound.play();
   points.textContent = POINTS++;
   coins.textContent = COINS++;
   score.textContent = SCORE++;

   rewards()
});


/*
function rewards() {

    if(SCORE === 100) {
        alert("keep it up!");
    } else if(COINS >= 30 && !alertShown) {
        alert("can you buy something");
        alertShown = true;
    } else if(POINTS === 10) {
        alert("you can redeem something");
    } 

    if(SCORE === 10) {
       LEVEL += 1;
       level.textContent = LEVEL;
    } else if(SCORE === 20) {
        LEVEL += 1;
        level.textContent = LEVEL;
    }

}
*/

function rewards() {
    if (SCORE === 11) {



        alertP.textContent = "you have unlocked magical rank!";
        alertBox.style.display = "flex";
        alertBox.style.justifyContent = "center";
        alertBox.style.alignItems = "center";
        alertBox.style.flexDirection = "column";


        LEVEL = 1;
        level.textContent = LEVEL;
        firstCheck.style.display = "inline-block";


    } else if (SCORE === 21) {


        alertP.textContent = "you have unlocked the adventure rank!";
        alertBox.style.display = "flex";
        alertBox.style.justifyContent = "center";
        alertBox.style.alignItems = "center";
        alertBox.style.flexDirection = "column";

        LEVEL = 2;
        level.textContent = LEVEL;
        secondCheck.style.display = "inline-block";

    } else if (SCORE === 31) {

        alertP.textContent = "you have unlocked the best rank!";
        alertBox.style.display = "flex";
        alertBox.style.justifyContent = "center";
        alertBox.style.alignItems = "center";
        alertBox.style.flexDirection = "column";



        LEVEL = 3;
        level.textContent = LEVEL;
        thirdCheck.style.display = "inline-block";

    } else if(SCORE === 41) {
        LEVEL = 4;
        level.textContent = LEVEL;

    } else if(SCORE === 51) {
        LEVEL = 5;
        level.textContent = LEVEL;

    }  else if(SCORE === 61) {
        LEVEL = 6;
        level.textContent = LEVEL;
    } else if(SCORE === 71) {
        LEVEL = 7;
        level.textContent = LEVEL;
    } else if(SCORE === 81) {
        LEVEL = 8;
        level.textContent = LEVEL;
    } else if(SCORE === 91) {
        LEVEL = 9;
        level.textContent = LEVEL;
    } else if(SCORE === 101) {
        LEVEL = 10;
        level.textContent = LEVEL;

        alertP.textContent = "Congratulations! Reached level 10. Reward: 10 coins";
        alertBox.style.display = "flex";
        alertBox.style.justifyContent = "center";
        alertBox.style.alignItems = "center";
        alertBox.style.flexDirection = "column";

        firstReward.style.textDecoration = "line-through";

        coins.textContent = COINS+=10;
    } else if(SCORE === 201) {
        LEVEL = 20;
        level.textContent = LEVEL;

        alertP.textContent = "Congratulations! Reached level 20. Reward: 20 coins";
        alertBox.style.display = "flex";
        alertBox.style.justifyContent = "center";
        alertBox.style.alignItems = "center";
        alertBox.style.flexDirection = "column";

        secondReward.style.textDecoration = "line-through";

        coins.textContent = COINS+=20;
    } else if(SCORE === 301) {
        LEVEL = 30;
        level.textContent = LEVEL;

        alertP.textContent = "Congratulations! Reached level 30. Reward: 30 coins";
        alertBox.style.display = "flex";
        alertBox.style.justifyContent = "center";
        alertBox.style.alignItems = "center";
        alertBox.style.flexDirection = "column";

        thirdReward.style.textDecoration = "line-through";

        coins.textContent = COINS+=30;
    }  else if(SCORE === 401) {
        LEVEL = 40;
        level.textContent = LEVEL;

        alertP.textContent = "Congratulations! Reached level 40. Reward: 40 coins";
        alertBox.style.display = "flex";
        alertBox.style.justifyContent = "center";
        alertBox.style.alignItems = "center";
        alertBox.style.flexDirection = "column";

    
        fourthReward.style.textDecoration = "line-through";
    

        coins.textContent = COINS+=40;
    } else if(SCORE === 501) {
        LEVEL = 50;
        level.textContent = LEVEL;

        alertP.textContent = "Congratulations! Reached level 50. Reward: 50 coins";
        alertBox.style.display = "flex";
        alertBox.style.justifyContent = "center";
        alertBox.style.alignItems = "center";
        alertBox.style.flexDirection = "column";


        
        fifthReward.style.textDecoration = "line-through";
        

        coins.textContent = COINS+=50;
    } 











  
}





buttonOkAlert.addEventListener("click", function() {
    alertBox.style.display = "none";
});




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

let lastEquippedSkin = localStorage.getItem('lastEquippedSkin') || null;


let skinMysteriousEquipped = false;
let skinAdventureEquipped = false;
let skinAquaticEquipped = false;








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
});



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



