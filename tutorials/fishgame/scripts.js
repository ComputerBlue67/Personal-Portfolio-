// canvas setup
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

let score = 0;
let gameFrame = 0;
ctx.font = '50px Georgia';
//mouse interactivity
let canvasPosition = canvas.getBoundingClientRect();
console.log(canvasPosition);
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}
canvas.addEventListener('mousedown',function(event){
    mouse.click = true;
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;
});
canvas.addEventListener('mouseup',function(){
    
})
//create player
class Player{
    constructor(){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.radius = 50;
        this.angle = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.spriteWidth = 498;
        this.spriteheight = 327;
    }
    update(){
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        if (mouse.x != this.x){
            this.x -= dx/30;
        }
        if (mouse.y != this.y){
            this.y -= dy/30;
        }
    }
    draw()
}
// bubbles
//animation loop