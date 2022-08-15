import processing.serial.*;
import de.bezier.data.sql.*;

MySQL db;


Serial port;
String mensaje = null;
String temp = "";
termometro ti=new termometro();
frecuencia fi=new frecuencia();
int lastSecond=0;

void setup(){
  port = new Serial(this, "COM3", 9600);
  db = new MySQL( this, "localhost", "practica1_indoor", "root", "" );  // open database file
  
  size(600,600);
  ti.setDiamAlto(70,80);
  ti.setMinMax(0,40);
  ti.posicion(150,150);
}

void draw(){
  int s = second();
  int m = minute();
  int h = hour();
  int month = month();
  int year = year();
  int day = day();
  String hora = null;
if(port.available()>0){
 mensaje = port.readStringUntil('\n');
  }
  hora = (year + "-"+month+"-"+day+"-"+" "+h+":"+m+":"+s);

  if(mensaje!=null){
  //int[] values = int(split(mensaje,'/'));
 //println(mensaje);
 if ( db.connect() )
    {
       db.execute("INSERT INTO Temp_Corp (temperatura,fecha) VALUES ('"+mensaje+"','"+hora+')");
    }

 println(mensaje);
 
 
 println(hora);

 lastSecond = s;
 
 ti.setValor(float(mensaje));
 fi.setValor(float(mensaje));
 
 
 
  background(0);

 text("caloria "+mensaje, 50, 500);
}

ti.show();
fi.show();

mensaje = null;



}
