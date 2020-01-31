let cheese = 0;
let cheesePerSec = 0;
let pickaxePrice = 50;
let mine = 1;
let pickaxeInfo = {
  pickaxes: {
    pickaxePrice: 50,
    quantity: 0,
    multiplier: 1
  }
}
let minerInfo = {
  miners: {
    minerPrice: 500,
    minerQuantity: 0,
    automatic: true
  }
}
let roverInfo = {
  rovers: {
    roverPrice: 500000,
    roverQuantity: 0,
    automatic: true
  }
}
let sharpenPickaxePrice = 100000;


function buySharpenPickaxe() {
  if (cheese < sharpenPickaxePrice) {
    window.alert("You do not have enough cheese to purchase this upgrade :(")
  }
  else if (cheese >= sharpenPickaxePrice) {
    cheese -= sharpenPickaxePrice
    update()
    update3()
    sharpenPickaxe()
  }
}
function buyPickaxe() {
  if (cheese < pickaxePrice) {
    window.alert("You do not have enough cheese to purchase this upgrade :(")
  }
  else if (cheese >= pickaxePrice) {
    cheese -= pickaxePrice
    upgradePickaxe()
    update3()
  }
  update()
}

function hireMiner() {
  if (cheese < minerInfo.miners.minerPrice) {
    window.alert("You do not have enough cheese to purchase this upgrade :(")
  }
  else if (cheese >= minerInfo.miners.minerPrice) {
    cheese -= minerInfo.miners.minerPrice
    minerWork()
    update()

  }
}
function hireRover() {
  if (cheese < roverInfo.rovers.roverPrice) {
    window.alert("You do not have enough cheese to purchase this upgrade :(")
  }
  else if (cheese >= roverInfo.rovers.roverPrice) {
    cheese -= roverInfo.rovers.roverPrice
    roverWork()

  }
  update()
}
function addcheese() {
  cheese += cheesePerSec
  console.log(cheese)
  update()
}

function minerWork() {
  cheesePerSec += 1
  minerInfo.miners.minerQuantity += 1
  update2()
  update6()
}

function roverWork() {
  cheesePerSec += 20
  roverInfo.rovers.roverQuantity += 1
  update2()
  update7()
}

function mineCheese() {
  cheese += mine
  update()
}

function upgradePickaxe() {
  mine *= 2
  pickaxePrice *= 3
  update3()
  update4()
}

function sharpenPickaxe() {
  mine *= 10
  sharpenPickaxePrice *= 100
  update3()
  update5()
}





let cheeseCounter = document.getElementById("cheese");
let cheesePerSecCounter = document.getElementById("cheesePerSec");
let minePower = document.getElementById("mine");
let costOfPickaxeChange = document.getElementById("pickaxePrice");
let costOfSharpenPickaxe = document.getElementById("sharpenPickaxePrice")
let numOfMiners = document.getElementById("minerInfo.miners.minerQuantity")
let numOfRovers = document.getElementById("roverInfo.rovers.roverQuantity")
let costOfMiner = document.getElementById("minerInfo.miners.minerPrice")
let costOfRover = document.getElementById("roverInfo.rovers.roverPrice")



function update() {
  cheeseCounter.innerText = cheese
}
function update2() {
  cheesePerSecCounter.innerText = cheesePerSec
}

function update3() {
  minePower.innerText = mine
}

function update4() {
  costOfPickaxeChange.innerText = pickaxePrice
}

function update5() {
  costOfSharpenPickaxe.innerText = sharpenPickaxePrice
}

function update6() {
  numOfMiners.innerText = minerInfo.miners.minerQuantity
}

function update7() {
  numOfRovers.innerText = roverInfo.rovers.roverQuantity
}

function update8() {
  costOfMiner.innerText = minerInfo.miners.minerPrice
}

function update9() {
  costOfRover.innerText = roverInfo.rovers.roverPrice
}


function startInterval() {
  console.log("running")
  setInterval(addcheese, 1000);
}


update()
update2()
update3()
update4()
update5()
update6()
update7()
update8()
update9()
startInterval()