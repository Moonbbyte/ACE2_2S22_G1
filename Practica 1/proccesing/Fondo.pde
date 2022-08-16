class Fondo
{
  
  float x=random(width);
  float y=random(-200,-100);
  float tiempo=random(4,10);
  
    void fall(){
  y=y+tiempo;
    if(y>height)
    {
        y=random(-200,-100);
    }
  
  
  }
    
    
    
   void show(){
  stroke(138,43,226);
  line(x,y,x,150);
  rect(x,y,2,150);
  fill(138,43,226);
ellipse(x, y, 20,20);
  }
    
    
    
  }
