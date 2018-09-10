let burger = document.getElementById("burger")
let topMenu = document.getElementById("topMenu")

if(window.innerWidth<701) topMenu.className = "hidden"

burger.addEventListener("click", function(){
  if(topMenu.className!=="hidden") {
    topMenu.className = "hidden"
  }else{
    topMenu.className = "topMenu"
  }
})

topMenu.addEventListener("click", function(){
  topMenu.className="topMenu"
})
