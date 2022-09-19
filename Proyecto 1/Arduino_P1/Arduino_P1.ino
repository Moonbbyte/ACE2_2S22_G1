

#define FORCE_SENSOR_PIN A0
#include "I2Cdev.h"
#include "MPU6050.h"

#if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
    #include "Wire.h"
#endif

#define OUTPUT_READABLE_ACCELGYRO

MPU6050 accelgyro;
//MPU6050 accelgyro(0x69); // <-- use for AD0 high

int16_t ax, ay, az;
int16_t gx, gy, gz;



void setup()  
{
  #if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
        Wire.begin();
    #elif I2CDEV_IMPLEMENTATION == I2CDEV_BUILTIN_FASTWIRE
        Fastwire::setup(400, true);
    #endif
  Serial.begin(9600);
  accelgyro.initialize();

}

void loop() 
{
   ejecutarOpcion();
}

void ejecutarOpcion() {
    if (Serial.available() > 0) {
      char opcion = Serial.read();
      switch (opcion) {
        case 'v':
          velocidad();
          return;
        case 'r':
          ritmo();
          return;
        case 'f':
          fuerza();
          return;
      }
  }
}

void velocidad() {
  int contador = 0;

  while(contador != 60){
    accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
    int dato = sqrt(gx+gy);
  #ifdef OUTPUT_READABLE_ACCELGYRO
        // display tab-separated accel/gyro x/y/z values
        if(dato != 0){
          Serial.print("3,");
          Serial.println(dato);
        }
        contador++;
        
    #endif
    
    delay(500);
  }
    
    
  
}

void ritmo(){
  int contador = 0;
  int ritmoant = 0;
  int ritmoact = 0;
 delay(5000);
  if (Serial.available() > 0) {
      char opcion = Serial.read();
      switch (opcion) {
        case 'a': //0.5
        accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
        ritmoant = sqrt(gx+gy);
        ritmoact = sqrt(gx+gy);
          
          while(contador != 60){
            accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
            int dato = sqrt(gx+gy);
            ritmoant = ritmoact;
            ritmoact = dato;
          #ifdef OUTPUT_READABLE_ACCELGYRO
                // display tab-separated accel/gyro x/y/z values               
                if(dato != 0){
                  Serial.print("1,");
                  Serial.print(dato);
                  Serial.print(",");
                  if(ritmoact < ritmoant){
                  Serial.println("e");
                  }else if(ritmoact == ritmoant){
                    Serial.println("m");
                  }else{
                    Serial.println("s");
                }
                }else{
                      Serial.print("0,");
                      Serial.print(dato);
                      Serial.print(",");
                      Serial.println("b");
                      
                    }

                contador++;
                
            #endif
            
            delay(500);
          }
          return;
          case 'b': //1
            accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
            ritmoant = sqrt(gx+gy);
            ritmoact = sqrt(gx+gy);
              
              while(contador != 30){
                accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
                int dato = sqrt(gx+gy);
                ritmoant = ritmoact;
                ritmoact = dato;
              #ifdef OUTPUT_READABLE_ACCELGYRO
                    // display tab-separated accel/gyro x/y/z values               
                    if(dato != 0){
                      Serial.print("1,");
                      Serial.print(dato);
                      Serial.print(",");
                      if(ritmoact < ritmoant){
                      Serial.println("e");
                      }else if(ritmoact == ritmoant){
                        Serial.println("m");
                      }else{
                        Serial.println("s");
                    }
                    }else{
                      Serial.print("0,");
                      Serial.print(dato);
                      Serial.print(",");
                      Serial.println("b");
                      
                    }
    
                    contador++;
                    
                #endif
                
                delay(1000);
              }
              return;

          case 'c': //1.5
            accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
            ritmoant = sqrt(gx+gy);
            ritmoact = sqrt(gx+gy);
              
              while(contador != 15){
                accelgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
                int dato = sqrt(gx+gy);
                ritmoant = ritmoact;
                ritmoact = dato;
              #ifdef OUTPUT_READABLE_ACCELGYRO
                    // display tab-separated accel/gyro x/y/z values               
                    if(dato != 0){
                      Serial.print("1,");
                      Serial.print(dato);
                      Serial.print(",");
                      if(ritmoact < ritmoant){
                      Serial.println("e");
                      }else if(ritmoact == ritmoant){
                        Serial.println("m");
                      }else{
                        Serial.println("s");
                    }
                    }else{
                      Serial.print("0,");
                      Serial.print(dato);
                      Serial.print(",");
                      Serial.println("b");
                      
                    }
    
                    contador++;
                    
                #endif
                
                delay(1500);
              }
              return;
        
      }
  }


  
}


void fuerza(){
  //Serial.println("Escogiste Fuerza");
  int analogReading = analogRead(FORCE_SENSOR_PIN);
  
  while (analogReading == 0) {
    analogReading = analogRead(FORCE_SENSOR_PIN);
    

   if(analogReading != 0){
      Serial.print("2,");
      Serial.println(analogReading);
   }

   delay(50);
 
}
  
}
