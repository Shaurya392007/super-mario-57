class Player
{
    constructor()
    {
        this.spt = createSprite(400, 200, 100, 100);

        this.spt.shapeColor = "blue";
        this.spt.addAnimation("mario", marioImage);
        this.spt.scale = 0.03;

    }
    applyGravity()
    {
        this.spt.velocityY = this.spt.velocityY + 2;
    }
    moveLeft()
    
    {
        this.spt.x = this.spt.x - 10;

    }

    moveRight()
    {
        this.spt.x = this.spt.x + 10;
    }
    
    jump()
    {
        this.spt.velocityY =  -30;
    }

};