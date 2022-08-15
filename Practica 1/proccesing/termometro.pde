class termometro
{
  float posx,posy,diam,alto,minpx,maxpx,valor,valor2,min,max;
  boolean modoHSB;
  int r,g,b,h;
  String magnitud,nombre;
 
  public termometro()
  {
    posx=100;
    posy=150;
    diam=120;
    alto=50;
    modoHSB=true;
    r=255;
    g=0;
    b=0;
    minpx=posy-diam/2;
    maxpx=posy-(alto*0.98);
    valor=50;
    min=0;
    max=100;
    magnitud="C°";
    nombre="Temperatura";
    valor2=2;
  }
  public void setModoHSB(boolean modoHSB)
  {
    this.modoHSB=modoHSB;
  }
  public void setColor(int r,int g,int b)
  {
    this.r=r;
    this.g=g;
    this.b=b;
  }
  public void setDiamAlto(float diam,float alto)
  {
    this.diam=diam;
    this.alto=alto;
  }
  public void posicion(float posx,float posy)
  {
    this.posx=posx;
    this.posy=posy;
  }
  public void setValor(float valor)
  {
    this.valor=valor;
  }
  public void setMinMax(float min,float max)
  {
    this.min=min;
    this.max=max;
  }
  public void nombre(String nombre)
  {
    this.nombre=nombre;
  }
  public void setMagnitud(String magnitud)
  {
    this.magnitud=magnitud;
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
    
    
    
    
    if(valor>valor2)
    {
      valor2+=0.1;
    }
    if(valor<valor2)
    {
      valor2-=0.1;
    }
    minpx=posy-diam/2;
    maxpx=posy-(alto*0.98);
    noStroke();
    fill(#FFFFFF );
    ellipse(posx,posy,diam,diam);
    stroke(#FFFFFF );
    strokeWeight(diam/2.5);
    line(posx,posy,posx,posx-alto);
    if(modoHSB)
    {
      noStroke();
      
      colorMode(HSB,360,100,100);
      fill(map(valor2,min,max,227,0),100,100);
      h=int(map(valor2,min,max,227,0));
      ellipse(posx,posy,6*diam/8,6*diam/8);
      stroke(map(valor2,min,max,227,0),100,100);
      //strokeWeight((6*diam/8)/3.5);
      line(posx,posy,posx,map(valor2,min,max,minpx,maxpx));
     




      
    }
    else
    {
      noStroke();
      colorMode(RGB,255,255,255);
      fill(r,g,b);
      ellipse(posx,posy,6*diam/8,6*diam/8);
      stroke(r,g,b);
      strokeWeight((6*diam/8)/3.5);
      line(posx,posy,posx,map(valor2,min,max,minpx,maxpx));
      
    }
    fill(255);
    text("Temperatura",80,30);
    textFont(loadFont("ForteMT-25.vlw"), 25);
    fill(color(28, 27, 23));
    strokeWeight(2);
    rect(100,posy+diam,100,50);
    //fill(0,0,255);
    fill(#FFFFFF);
    text(" "+(nf(valor2,0,2))+magnitud,110,250);
    //text(nombre,posx-textWidth(nombre)/2,posy+diam);
  }
  
  public int getColor()
  {
    return h;
  }
}
