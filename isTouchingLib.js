
//touching function
function isTouching(fixedRect, movingRect){

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {

    // movingRect.velocityX = movingRect.velocityY * (-1);
    // fixedRect.velocityX = fixedRect.velocityY * (-1);

    //movingRect.shapeColor="red";
    return true;
  }
  else{
    //movingRect.shapeColor="blue"
    return false;
  }

}