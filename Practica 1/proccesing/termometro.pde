class termometro
{
  float valor2,min,max;
  float minpx,maxpx,valor;
 
  public termometro()
  {
    minpx=150-70/2;
    maxpx=150-(80*0.98);
    valor=50;
    min=0;
    max=110;
    valor2=2;
  }



  public void setValor(float valor)
  {
    this.valor=valor;
  }

  public void show()
  {
 strokeWeight(10);
 fill(#19004F);
 stroke(153);//153
 rect(50,0,200,300);   
 
 strokeWeight(10);
 fill(#19004F);
 rect(290,0,290,300);  
 
 
  strokeWeight(10);
 fill(#19004F);
 rect(165,315,230,275);  
    
    
    if(valor>valor2)
    {
      valor2+=0.1;
    }
    if(valor<valor2)
    {
      valor2-=0.1;
    }
    
    minpx=150-120/2;
    maxpx=150-(80*0.98);
    noStroke();
    fill(#FFFFFF );
    ellipse(150,150,70,70);
    stroke(#FFFFFF );
    strokeWeight(70/2.5);
    line(150,150,150,150-80);


      noStroke();
      colorMode(HSB,360,100,100);
      fill(map(valor2,min,max,227,0),100,100);
      ellipse(150,150,6*70/8,6*70/8);
      stroke(map(valor2,min,max,227,0),100,100);
      line(150,150,150,map(valor2,min,max,minpx,maxpx));

 
 
    fill(255);
    text("Temperatura",80,30);
    textFont(loadFont("ReadyLover-25.vlw"), 25);
    fill(color(28, 27, 23));
    fill(#FFFFFF);
    text(" "+(nf(valor2,0,2))+"C°",110,250);
  }
  

}
