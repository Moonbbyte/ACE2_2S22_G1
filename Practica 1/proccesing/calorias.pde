
class calorias
{
  float valor,valor2, aux3;

  int  poss;
  String nombre;
  int aux, aux2;
 
  public calorias()
  {
    aux3=1;
    aux=0;
    aux2=0;
    poss=500;
    valor=50;
    valor2=2;
  }  
  
  public void setValor(float valor)
  {
    this.valor=valor;
  }
  
  public void show()
  {
    fill(255);
    text("Calorías Quemadas",195,350);
    textFont(loadFont("ReadyLover-25.vlw"), 25);
 

 strokeWeight(15);
 fill(#19004F);
 stroke(#FFFFFF );//153
 strokeWeight(10);
   fill(#19004F);
ellipse(275, 475, 125, 125);


 stroke(#FFFFFF );//153
 strokeWeight(13);
beginShape();
fill(#19004F);
  vertex(230,425);
  vertex(260,375);
  vertex(275,415);
  
  vertex(300,395);
  vertex(320,425);
  
  vertex(230,425);
endShape();


stroke(100);//153
 strokeWeight(0);
beginShape();
fill(#19004F);
  vertex(220,450);
  vertex(260,375);
  vertex(275,415);
  
  vertex(300,395);
  vertex(330,450);
  
  vertex(220,450);
endShape();


float resultado=valor2-valor;

 if((int)resultado>=1)
{   
   aux-=2;
   aux2-=6;
   aux3-=6;

  }
  else  if((int)resultado==0)
{   
 

  }
  else {   
   aux+=1;
   aux2+=3;
   aux3+=2;

  }



if(aux2>=15)
{   
 aux2=15;

  }
  
  if(aux<=0)
{   
 aux=1;

  }
  

for (int i = 0; i < aux; i++) {
    float r = random(240, 310);
    float r2 = random(425, 525);
    stroke(255, aux3);
    fill(map(aux3,0,30,227,0),100,100);
    ellipse((int)r, (int)r2,8+aux2, 8+aux2);
  }
    
    valor2=valor;
      fill(255);
      text(nf(valor,0,2)+" kcal",235,575);   
    
  }
  
  

}
