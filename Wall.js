class Wall
{
    constructor(xPos)
    {
      this.sptX = xPos;
      this.sptY = random([150,350]);
      this.spt = createSprite(this.sptX, this.sptY);
      this.spt.shapeColor = "green";
      this.spt.addImage("wall",wallImage);
      this.spt.scale = 0.09;
    }
}