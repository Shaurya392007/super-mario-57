class Platform
{
    constructor(xPos)
    {
      this.sptX = xPos;
      this.sptY = 650;
      this.sptW = random(250,400);
      this.sptH = random([100,200]);

      this.spt = createSprite(this.sptX, this.sptY, this.sptW, this.sptH);
      this.spt.shapeColor = "green";
      this.spt.addImage("ground",groundImage);
    }
}