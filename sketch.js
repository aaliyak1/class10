var trex
var trexRunning 
var ground
var groundImage
var invisibleGround
function preload () {
  trexRunning = loadAnimation ("trex1.png", "trex3.png", "trex4.png")
  groundImage = loadImage ("ground2.png")
}
function setup () {
  createCanvas (600, 200)
trex = createSprite(50, 160, 20, 50)
trex.addAnimation ("running", trexRunning)
trex.scale = 0.4
ground = createSprite(200, 180, 400, 20)
ground.addImage (groundImage)
ground.velocityX = -2
invisibleGround = createSprite(200, 190, 400, 20)
invisibleGround.visible = false
}
function draw () {
  background("white")
  if (ground.x < 0) {
    ground.x = 200
  }
  if (keyDown("space")) {
    trex.velocityY = -10  
  }
  trex.velocityY = trex.velocityY + 0.8
  trex.collide (invisibleGround) 
drawSprites();
}