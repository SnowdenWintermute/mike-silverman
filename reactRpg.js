let instructionPics = [
  {
    index: 0,
    src: "./pics/reactRpgPics/selectClass.png",
    text: "Choose a class using the button on the left."
  },
  {
    index: 1,
    src: "./pics/reactRpgPics/pressStart.png",
    text: "You can see info about each class' abilities. When you find one you like, press start."
  },
  {
    index: 2,
    src: "./pics/reactRpgPics/pressExplore.png",
    text: "React RPG is about exploring the dungeon. Press Explore to go to the next room. The current room is displayed in the bottom right."
  },
  {
    index: 3,
    src: "./pics/reactRpgPics/roomsAppear.png",
    text: "Most rooms contain monsters. Damage the monster by pressing Attack."
  },
  {
    index: 4,
    src: "./pics/reactRpgPics/battleLog.png",
    text: "Battle information is shown in the top right, with the most recent events at the top."
  },
  {
    index: 5,
    src: "./pics/reactRpgPics/takeLoot.png",
    text: "When a monster is slain, it will drop loot. Press Take to move the loot to your inventory."
  },
  {
    index: 6,
    src: "./pics/reactRpgPics/equipLoot.png",
    text: "You can equip loot by pressing the Down Arrow button next to it."
  },
  {
    index: 7,
    src: "./pics/reactRpgPics/menuScreen.png",
    text: "To see your current equipment, press the Menu button."
  },
  {
    index: 8,
    src: "./pics/reactRpgPics/unequipAndStats.png",
    text: "You can remove equipment by pressing the Up Arrow button next to it. You can also see your stats in this screen."
  },
  {
    index: 9,
    src: "./pics/reactRpgPics/injectLock.png",
    text: "Some rooms contain treasure chests. You can break the lock by using an Autoinjector."
  },
  {
    index: 10,
    src: "./pics/reactRpgPics/injectHp.png",
    text: "Autoinjectors can also be used to restore full HP or MP."
  },
  {
    index: 11,
    src: "./pics/reactRpgPics/makeShards.png",
    text: "Any unwanted equipment can be broken down into Shards. Shards can be used to make Autoinjectors."
  },
  {
    index: 12,
    src: "./pics/reactRpgPics/tradeShards.png",
    text: "Some rooms have a staircase. At the staircase you can exchange Shards for Autoinjectors."
  },
  {
    index: 13,
    src: "./pics/reactRpgPics/goDown.png",
    text: "If you choose to go down the stairs you will reach the next level of the dungeon. Your character will also gain some stats."
  },
  {
    index: 14,
    src: "./pics/reactRpgPics/monstersStronger.png",
    text: "Monsters are stronger on lower floors. Press Menu to check their stats."
  },
  {
    index: 15,
    src: "./pics/reactRpgPics/enemyStats.png",
    text: "In this screen you can see the monster's stats in the lower right. Use this info to your advantage!"
  },
  {
    index: 16,
    src: "./pics/reactRpgPics/chooseSkill.png",
    text: "On each new floor you gain a skill point. Use them to gain and strengthen your skills."
  },
  {
    index: 17,
    src: "./pics/reactRpgPics/useSkill.png",
    text: "Click on a skill to use it. Skills generally cost MP to use, and some require shards."
  },
  {
    index: 18,
    src: "./pics/reactRpgPics/actionsTaken.png",
    text: "In your stats you can see the total actions you have taken. Try to reach level 10 in the lowest number of actions possible. Have fun!"
  }
]


let img = document.getElementById("reactRpgPic")
let caption = document.getElementById("reactRpgSlideshowCaptions")
let left = document.getElementById("leftButton")
let right = document.getElementById("rightButton")
let currentIndex = 0

let changePic = function(dir){
  for(p of instructionPics){
    if(img.src === p.src){
      currentIndex === p.index
    }
  }
  if(dir==="right"){
    if(currentIndex<instructionPics.length-1) {
      currentIndex += 1
      }else{ currentIndex = 0 }
    }
  if(dir==="left"){
    if(currentIndex>0){
    currentIndex -= 1
    }else{ currentIndex = instructionPics.length-1 }
  }

  img.src = instructionPics[currentIndex].src
  caption.textContent = instructionPics[currentIndex].text

}

right.addEventListener("click", function(){
  changePic("right")
})
left.addEventListener("click", function(){
  changePic("left")
})
