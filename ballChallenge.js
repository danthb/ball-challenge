
var positionX = 750;
var positionY = 850;
var velocityX= 20, velocityY = 20;
var counter = 0;
var ballNumbers = 0;
var color = '#A31F34';

var ball = document.getElementById('ball');
var square = document.getElementById('square');
var movementX = false;
var movementY = false;           

function createBall(id,x,y,color,radius){
  var div = document.createElement('div');
  div.id = 'ball';
  div.style.zIndex = '5';
  div.style.position = 'absolute';    
  div.style.width = '50px';    
  div.style.height = '50px';    
  div.style.borderRadius = radius;
  div.style.left = x + 'px';    
  div.style.top = y + 'px';    
  div.style.background = color; 
  document.getElementsByTagName('body')[0].appendChild(div);
  ballNumbers++;
  return div;        
}
function moveBall() {

      const Xmin = 300;
      const Xmax = 750;
      const Ymin = 100;
      const Ymax = 900;   

      if(positionX <= Xmin || positionX >= Xmax ){ 
        movementX = !movementX;
        counter++;
        ball.style.width = "50px";    
        ball.style.height =  "50px";  
        createBall(counter.toString(), positionX,positionY,color, "50" + '%');
      }
      if(positionY <= Ymin || positionY >= Ymax ){ 
        movementY = !movementY;
        counter++;
        ball.style.width = "70px";    
        ball.style.height =  "70px";  
        createBall(counter.toString(),positionX,positionY,color, "50" + '%');


      }
      if (movementX){
        positionX = positionX - velocityX;
        ball.style.left = positionX+'px';
      }
      else{ 
        positionX = positionX + velocityX;
        ball.style.left = positionX+'px';
      }

      if (movementY){ 
        positionY = positionY - velocityY;
        ball.style.top = positionY+'px';

      }
      else{
        positionY = positionY + velocityY;
        ball.style.top = positionY+'px';
      }

      if (ballNumbers == 115){
        clearInterval(setInterval(moveBall, 2));
        ball.style.display = 'none';
        square.style.background = "white";

}
}
setInterval(moveBall, 5);