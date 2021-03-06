//let dropSound = document.getElementById('dropSound')

let canvas = document.getElementById('canvas')
canvas.width=window.innerWidth
canvas.height=window.innerHeight

//c means context
let c = canvas.getContext('2d')

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

let mouse = {
  x: undefined,
  y: undefined,
  xClick: undefined,
  yClick: undefined,
  down: false,
  up: true,
  interacting: false
}

let menuState = {
  clicked: false,
  active: false,
  loaded: false,
  textSize: innerWidth/30
}

let finger = {
  x: undefined,
  y: undefined,
  down: false
}

let menuHidden = true

window.addEventListener('mousemove', function(e){
  mouse.x = e.x
  mouse.y = e.y
})
window.addEventListener('click',function(e){
  mouse.xClick = e.x
  mouse.yClick = e.y
  if(menuState.clickable&&(!menuState.active)){
    menuState.active = true
  }else if(menuState.clickable&&menuState.active){
    menuState.active = false
  }

  // for(p of plant.growPoints){
  //       if(mouse.x>p.x-p.radius
  //         &&mouse.y>p.y-p.radius
  //         &&mouse.x<p.x+p.radius
  //         &&mouse.y<p.y+p.radius
  //         ){
  //           p.clicked = true
  //         }
  //
  // }
})

window.addEventListener('mousedown',function(e){
  mouse.down = true
  mouse.up = false
})
window.addEventListener('mouseup',function(e){
  mouse.down = false
  mouse.up = true
})
window.addEventListener('touchstart',function(e){
  mouse.x = e.touches[0].pageX
  mouse.y = e.touches[0].pageY
  mouse.down = true
  mouse.up = false
})
window.addEventListener('touchmove',function(e){
  mouse.x = e.touches[0].pageX
  mouse.y = e.touches[0].pageY
})
window.addEventListener('touchend',function(e){
  mouse.down = false
  mouse.up = true
})
window.addEventListener('resize',function(e){
  c.clearRect(0,0, innerWidth,innerHeight)
  canvas.width = innerWidth
  canvas.height = innerHeight
  makeItRain()
})

//Weather properties
let density = 2000
let intensity = 1.4
let windSpeed = 0
let windDirection = 1
let cloudSize = 500
let cloudPosition = 0

function setDensity(percent) {
  density = percent*24
  makeItRain()
}
function setWindSpeed(percent) {
  if(percent>50)windSpeed = percent/20
  if(percent<50)windSpeed = (percent-100)/20 *-1
  if(percent>50) windDirection = percent/50
  if(percent<50) windDirection = (percent-100)/50
  if(percent===50) windDirection = 0
}


//raindrop object
function Raindrop(x, y, radius, speed){
  this.x = x
  this.radius = radius
  this.speed = speed
  this.y = y
  this.draw = function(){
    c.beginPath()
    c.arc(x, y, radius, 0, (Math.PI), true)
    c.bezierCurveTo(x-radius, y+radius*.85, x+radius, y+radius*.85, x+radius, y)
    c.fillStyle = "rgba(50,150,190,.5)"
    c.fill()
  }
  this.update = function(){
    this.y += speed
    y+=speed
    this.x += windSpeed * windDirection
    x+= windSpeed * windDirection
    this.draw()
  }
}


function generateDrop(){
  let x = getRandomArbitrary(-innerWidth/2,innerWidth+innerWidth/2)
  let y = getRandomArbitrary(-60, -1000)
  let size = getRandomArbitrary(1,3.2)
  let speed = size * intensity
  raindropArray.push(new Raindrop(x, y, size, speed))
}

function updateDrops(){
  for(drop of raindropArray){
    drop.update()
    if(drop.y > innerHeight || drop.x > innerWidth+innerWidth/2 || drop.x < - innerWidth/2){
      //remove drop and create new one
      raindropArray.splice(raindropArray.indexOf(drop),1)
      generateDrop()
    }
  }
}

// function changeWind(){
//   let shouldChange = false
//   if ((Math.random()*1000)>790) shouldChange = true
//   if(shouldChange) {
//     if(windSpeed >= 0 && windSpeed <= 5){
//     windSpeed += (Math.random()-.5)
//   }
// }
// }

//Create initial rainfall
let raindropArray = []
function makeItRain(){
  raindropArray = []
for(let i=0;i<density;i++){
  generateDrop()
}
}

makeItRain()

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0,0, innerWidth,innerHeight)
  updateDrops()
}

animate()
