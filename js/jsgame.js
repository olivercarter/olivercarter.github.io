var canvas2 = document.getElementById("canvas2");
var enviro = canvas2.getContext("2d");
window.onload = BigLoop();
var fps = 30;
window.setInterval(BigLoop, 1000/fps);

//global variables//
var player_x = getRandomInt(10, 280);
var player_y = getRandomInt(10, 280);
var player_size_x = 20;
var player_size_y = 20;
var p_vel_x = 0;
var p_vel_y = 0;

var enemy_x = getRandomInt(25, 275);
var enemy_y = getRandomInt(25, 275);
var e_vel_x = getRandomInt(-4, 4)
var e_vel_y = getRandomInt(-4, 4)

var potion_x = getRandomInt(10, 290);
var potion_y = getRandomInt(10, 290);

var walls = 0;
var potion = 0;

function BigLoop(){
  enviro.clearRect(0,0,300,300);
  


  window.addEventListener("keydown", function (event){
    switch (event.key) {
      case "ArrowDown":
        p_vel_y = 4;
        console.log("Down");
        break;
      case "ArrowUp":
        p_vel_y = -4;
        console.log("Up");
        break;
      case "ArrowLeft":
        p_vel_x = -4;
        console.log("Left");
        break;
      case "ArrowRight":
        p_vel_x = 4;
        console.log("Right");
        break;
      case "Digit1":
        walls = 0;
        console.log("Walls");
        break;
      case "Digit2":
        walls = 1;
        console.log("No Walls");
        break;
    }
  });

  //movement//
  player_x = player_x + p_vel_x;
  player_y = player_y + p_vel_y;
  enemy_x = enemy_x + e_vel_x;
  enemy_y = enemy_y + e_vel_y;  
  
  DrawPotion();
  DrawPlayer();
  DrawEnemy();
 
 
}