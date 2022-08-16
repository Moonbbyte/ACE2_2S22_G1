class frecuencia
{
  float valor,valor2, valor22;
  int x=0;
  int y=0;
    int xx=420;
      int yy=160;
 
  public frecuencia()
  {


    valor=0;
    valor2=0;
    valor22=0;
   
  }



  public void setValor(float valor)
  {
    this.valor=valor;
  }


  public void show()
  {

      
fill(255);
    text("Frecuencia Cardiaca SpO2",320,30);
    textFont(loadFont("ReadyLover-25.vlw"), 25);    
    
stroke(#FFFFFF );//153
strokeWeight(15);
 beginShape();
  fill(153);
  vertex(350,90);
  vertex(360,100);
  vertex(370,110);
  vertex(380,120);
  vertex(390,130);
  vertex(400,140);
  vertex(410,150);
  vertex(420,160);
  
  vertex(430,150);
  vertex(440,140);
  vertex(450,130);
  vertex(460,120);
  vertex(470,110);
  vertex(480,100);
  vertex(490,90);
  
  vertex(460,60);
  vertex(440,60);
  vertex(420,80);
  vertex(400,60);
  vertex(380,60);
  
  vertex(350,90);
endShape();


float resultado=valor2-valor;

 if((int)resultado>=1 && (int)resultado<=3)
{   
  x-=5;
   y-=5;
   valor22-=3;

  }
  else  if((int)resultado>=-3 && (int)resultado<=-1)
{  
   if(y<70 && y<70)
{  x+=5;
   y+=5;
   valor22+=3;

  };
   
  }
  else if((int)resultado==0)
{  
  }
  
else{
 
    if((int)valor>=95) // y 99
  {
      x=70;
      y=70; 
      valor22=3;
       
      
  }
   else if((int)valor>=91 && (int)valor<=94)
  {
      x=50;
      y=50; 
      valor22=9;
      
  }
   else if((int)valor>=86 && (int)valor<=90)
  {
      x=40;
      y=40; 
      valor22=15;
      
  }
  
  else
  {
      x=20;
      y=20; 
      valor22=21;
      
  }






};

  fill(255);
text(nf(valor,0,2)+"%",375,250);   


valor2=valor; 
pintar();   
    
    
  }
  
  
  
   public void pintar()
  {
colorMode(HSB,360,100,100);

strokeWeight(0);
beginShape();
fill(map(valor22,0,30,227,0),100,100);
  //fill(#2F65FF);
  vertex(420,160);
  vertex(xx-x,yy-y);
  vertex(xx+x,yy-y);
  vertex(420,160);
endShape();



if((int)valor>=100)
  {x=70;
   y=70; 
colorMode(HSB,360,100,100);

strokeWeight(0);
beginShape();
fill(map(valor22,0,30,227,0),100,100);
  vertex(490,90);
  vertex(460,60);
  vertex(440,60);
  vertex(420,80);
  vertex(400,60);
  vertex(380,60);
  vertex(350,90);
  vertex(490,90);
  vertex(460,60);
endShape();

  }




  }
  
  
}
