import processing.serial.*;
import de.bezier.data.sql.*;

MySQL db;


Serial port;
String mensaje = null;
String temp = "";
termometro ti=new termometro();
frecuencia fi=new frecuencia();
calorias ci=new calorias();
Fondo[] fondos =new Fondo[100];

int lastSecond=0;

void setup(){
  port = new Serial(this, "COM3", 115200);
  db = new MySQL( this, "localhost", "practica1_indoor", "root", "" );  // open database file
  
  size(600,600);
for (int i = 0; i < fondos.length; i++) {
      fondos[i]=new Fondo();
  }
  
  
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
  hora = (year + "-"+month+"-"+day+" "+h+":"+m+":"+s);

  if(mensaje!=null){
  float[]values = float(split(mensaje,','));
   println(int(values[0]));
   println(int(values[1]));
   println(values[2]);
 if ( db.connect() )
    {
       db.execute("INSERT INTO Temp_Corp (temperatura,fecha) VALUES ('"+values[2]+"','"+hora+"')");
       db.execute("INSERT INTO Frec_Card (pulsoCard,fecha) VALUES ('"+values[0]+"','"+hora+"')");
       db.execute("INSERT INTO Oxigeno (pulsoConOxigeno,fecha) VALUES ('"+values[1]+"','"+hora+"')");
    }

  println(mensaje);
  println(values);
  println(hora);

 lastSecond = s;
 
 ti.setValor(values[2]);
 fi.setValor(values[1]);
 ci.setValor(float(mensaje));
 
 
  background(0);

}

for (int i = 0; i < fondos.length; i++) {
      fondos[i].fall();
      fondos[i].show();
  }


ti.show();
fi.show();
ci.show();
mensaje = null;



}
