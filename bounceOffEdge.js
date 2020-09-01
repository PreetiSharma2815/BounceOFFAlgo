
//bounce function
function bounceOffEdge(topEdge, bottomEdge, leftEdge, rightEdge, sprite){
   
    if (abs(topEdge.y - sprite.y) < topEdge.height/2 + sprite.height/2 ) {
  
      sprite.velocityX = sprite.velocityX * (-1);
      sprite.velocityY = sprite.velocityY * (-1);
      topEdge.velocityX= 0;
      topEdge.velocityY= 0;     
      
    }
    if (abs(bottomEdge.y - sprite.y) < bottomEdge.height/2 + sprite.height/2 ) {
  
        sprite.velocityX = sprite.velocityX * (-1);
        sprite.velocityY = sprite.velocityY * (-1);
        bottomEdge.velocityX= 0;
        bottomEdge.velocityY= 0;     
        
    }

    if (abs(leftEdge.x - sprite.x) < leftEdge.width/2 + sprite.width/2 ) {
  
        sprite.velocityX = sprite.velocityX * (-1);
        sprite.velocityY = sprite.velocityY * (-1);
        leftEdge.velocityX= 0;
        leftEdge.velocityY= 0;     
        
    }

    if (abs(rightEdge.x - sprite.x) < rightEdge.width/2 + sprite.width/2 ) {
  
        sprite.velocityX = sprite.velocityX * (-1);
        sprite.velocityY = sprite.velocityY * (-1);
        rightEdge.velocityX= 0;
        rightEdge.velocityY= 0;     
        
    }
    
  
  }