import processing.serial.*;

Serial port;
String mensaje = null;
String temp = "";
termometro ti=new termometro();
frecuencia fi=new frecuencia();

void setup(){
  port = new Serial(this, "COM4", 9600);
  size(600,600);
  ti.setDiamAlto(70,80);
  ti.setMinMax(0,40);
  ti.posicion(150,150);
}

void draw(){
if(port.available()>0){
 mensaje = port.readStringUntil('\n');
  }

  if(mensaje!=null){
  //int[] values = int(split(mensaje,'/'));
 //println(mensaje);
 
 ti.setValor(float(mensaje));
 fi.setValor(float(mensaje));
 
 
 
  background(0);

 text("caloria "+mensaje, 50, 500);
}

ti.show();
fi.show();





}
