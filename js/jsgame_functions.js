
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function DrawPlayer(){
  enviro.beginPath();
  enviro.rect(player_x, player_y, player_size_x, player_size_y);
  enviro.fill
    enviro.stroke();
}
  
function DrawEnemy(){
  enviro.beginPath();
  enviro.arc(enemy_x, enemy_y,25,0*Math.PI,2*Math.PI);
  enviro.stroke();
}
  
function DrawPotion(){
  enviro.beginPath();
  enviro.rect (potion_x, potion_y,5,5);
  enviro.stroke();
}  

function Walls(){
  if (player_x <= 0){player_x = 0;} else if (player_x >= 280){player_x = 280;}
  if (player_y <= 0){player_y = 0;} else if (player_y >= 280){player_y = 280;}
  if (enemy_x <= 25){enemy_x = 25;} else if (enemy_x >= 275){enemy_x = 275;}
  if (enemy_y <= 25){enemy_y = 25;} else if (enemy_y >= 275){enemy_y = 275;}
}

function NoWalls(){
  if (player_x <= -10){player_x = 290;} else if (player_x >= 290){player_x = -10;}
  if (player_y <= -10){player_y = 290;} else if (player_y >= 290){player_y = -10;}
  if (enemy_x <= -25){enemy_x = 275;} else if (enemy_x >= 275){enemy_x = -25;}
  if (enemy_y <= -25){enemy_y = 275;} else if (enemy_y >= 275){enemy_y = -25;}
}

function GrowthPotion(){
  if (player_x == potion_x && player_y == potion_y){
     player_size_x = player_size_x*2;
     player_size_y = player_size_y*2;
  }
}