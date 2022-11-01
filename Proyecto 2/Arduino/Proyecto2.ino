#include <Wire.h>
#include "MAX30105.h"         //Sensor de oxígeno
#include "spo2_algorithm.h"   //Algoritmo para saber el oxigeno

#include <HX711_ADC.h>
#if defined(ESP8266)|| defined(ESP32) || defined(AVR)
#include <EEPROM.h>
#endif

//pins:
const int HX711_dout = 4; //mcu > HX711 dout pin
const int HX711_sck = 5; //mcu > HX711 sck pin

//HX711 constructor:
HX711_ADC LoadCell(HX711_dout, HX711_sck);

MAX30105 particleSensor;
unsigned long t = 0;




  
  
  #if defined(__AVR_ATmega328P__) || defined(__AVR_ATmega168__)
  //Arduino Uno doesn't have enough SRAM to store 100 samples of IR led data and red led data in 32-bit format
  //To solve this problem, 16-bit MSB of the sampled data will be truncated. Samples become 16-bit data.
  uint16_t irBuffer[100]; //infrared LED sensor data
  uint16_t redBuffer[100];  //red LED sensor data
  #else
  uint32_t irBuffer[100]; //infrared LED sensor data
  uint32_t redBuffer[100];  //red LED sensor data
  #endif
  
  int32_t bufferLength; //data length
  int32_t spo2; //SPO2 value
  int8_t validSPO2; //indicator to show if the SPO2 calculation is valid
  int32_t heartRate; //heart rate value
  int8_t validHeartRate; //indicator to show if the heart rate calculation is valid
  float distancia;
  
  byte pulseLED = 11; //Must be on PWM pin
  byte readLED = 13; //Blinks with each data read
  const int sensorPin = 22;
  
  //Pines para el Sensor ultrasonico
  const int Trigger = 2;   //Pin digital 2 para el Trigger del sensor
  const int Echo = 3;   //Pin digital 3 para el Echo del sensor

struct Usuario {
  char username[9]; // 8 caracteres y + 1 final de cadena
  char password[6]; // 5 caracteres y + 1 final de cadena
  char edad[4];
  char peso[4];
  char estatura[6];
  char genero[6];
  byte contador_serv; // Indica la cantidad de veces que se ha usado el servicio
};

struct Usuariologged {
  char username[9]; // 8 caracteres y + 1 final de cadena
  char password[6]; // 5 caracteres y + 1 final de cadena
  char edad[4];
  char peso[4];
  char estatura[6];
  char genero[6];
  byte contador_serv; // Indica la cantidad de veces que se ha usado el servicio
};

void setup() {
  Serial.begin(9600); // initialize serial communication at 115200 bits per second: 

  LoadCell.begin();
  //LoadCell.setReverseOutput(); //uncomment to turn a negative output value to positive
  unsigned long stabilizingtime = 2000; // preciscion right after power-up can be improved by adding a few seconds of stabilizing time
  boolean _tare = true; //set this to false if you don't want tare to be performed in the next step
  LoadCell.start(stabilizingtime, _tare);
  if (LoadCell.getTareTimeoutFlag() || LoadCell.getSignalTimeoutFlag()) {
    while (1);
  }
  else {
    LoadCell.setCalFactor(0.37); // user set calibration value (float), initial value 1.0 may be used for this sketch
  }

  
  

  pinMode(pulseLED, OUTPUT);
  pinMode(readLED, OUTPUT);
  pinMode(sensorPin , INPUT);  //definir pin como entrada

  //Estados para el Sensor ultrasonico
  pinMode(Trigger, OUTPUT); //pin como salida
  pinMode(Echo, INPUT);  //pin como entrada
  digitalWrite(Trigger, LOW);//Inicializamos el pin con 0

  // Initialize sensor
  if (!particleSensor.begin(Wire, I2C_SPEED_FAST,0x57)) //Use default I2C port, 400kHz speed
  {
    Serial.println(F("MAX30102 was not found. Please check wiring/power."));
    while (1);
  }

  byte ledBrightness = 60; //Options: 0=Off to 255=50mA
  byte sampleAverage = 4; //Options: 1, 2, 4, 8, 16, 32
  byte ledMode = 2; //Options: 1 = Red only, 2 = Red + IR, 3 = Red + IR + Green
  byte sampleRate = 100; //Options: 50, 100, 200, 400, 800, 1000, 1600, 3200
  int pulseWidth = 411; //Options: 69, 118, 215, 411
  int adcRange = 4096; //Options: 2048, 4096, 8192, 16384

  particleSensor.setup(ledBrightness, sampleAverage, ledMode, sampleRate, pulseWidth, adcRange); //Configure sensor with these settings
}

void loop() {
  menu();
}


void menu(){
  if(Serial.available()>0){
    char opcion = Serial.read();
    switch(opcion){
      case 'a':
        registrarse();
        return;
      case 'b':
        iniciosesion();
        return;
    }
  }
}


void registrarse() {
  delay(4000);
  char user[9] = "";
  char pass[9]="";
  char edad[4]="";
  char peso[4]="";
  char estatura[6]="";
  char genero[6]="";
  
  // CREAR OBJETO USUARIO
  Usuario usuario;
  usuario.contador_serv = 0; // Inicializamos su contador de servicios
  // VARIABLES AUXILIARES
  int indice = 0; // Para posicionarnos en los arreglos
  char caracter; // Almacena el caracter obtenido
  // OBTENEMOS EL USERNAME
  caracter = Serial.read();
  Serial.println(caracter);
  while (Serial.available()) {
    caracter = Serial.read();
    if (caracter != ',') {
      usuario.username[indice] = caracter;
      user[indice] += caracter;
      indice++;
    } else {
      usuario.username[indice] = '\0';
      break;
    }
  }
  indice = 0;
  while (Serial.available()) {
    caracter = Serial.read();
    if (caracter != ',') {
      usuario.password[indice] = caracter;
      pass[indice] += caracter;
      indice++;
    } else {
      usuario.password[indice] = '\0';
      break;
    }
  }

  indice = 0;
  while (Serial.available()) {
    caracter = Serial.read();
    if (caracter != ',') {
      usuario.edad[indice] = caracter;
      edad[indice] += caracter;
      indice++;
    } else {
      usuario.edad[indice] = '\0';
      break;
    }
  }

  indice = 0;
  while (Serial.available()) {
    caracter = Serial.read();
    if (caracter != ',') {
      usuario.peso[indice] = caracter;
      peso[indice] += caracter;
      indice++;
    } else {
      usuario.peso[indice] = '\0';
      break;
    }
  }

  indice = 0;
  while (Serial.available()) {
    caracter = Serial.read();
    if (caracter != ',') {
      usuario.genero[indice] = caracter;
      genero[indice] += caracter;
      indice++;
    } else {
      usuario.genero[indice] = '\0';
      break;
    }
  }

  indice = 0;
  while (Serial.available()) {
    caracter = Serial.read();
    if (caracter != ',') {
      usuario.estatura[indice] = caracter;
      estatura[indice] += caracter;
      indice++;
    } else {
      usuario.estatura[indice] = '\0';
      break;
    }
  }
  
  
   Serial.print(usuario.username);
   Serial.print(',');
   Serial.print(usuario.password);
   Serial.print(',');
   Serial.print(usuario.edad);
   Serial.print(',');
   Serial.print(usuario.peso);
   Serial.print(',');
   Serial.print(usuario.genero);
   Serial.print(',');
   Serial.println(usuario.estatura);

  
}

void iniciosesion(){

//  Usuariologged usuario;
//  int indice = 0; // Para posicionarnos en los arreglos
//  char caracter; // Almacena el caracter obtenido
//  char user[9] = "";
//  char pass[9]="";
//  char edad[4]="";
//  char peso[4]="";
//  char estatura[6]="";
//  char genero[6]="";
//
//  
//  // OBTENEMOS EL USERNAME
//  caracter = Serial.read();
//  Serial.println(caracter);
//  while (Serial.available()) {
//    caracter = Serial.read();
//    if (caracter != ',') {
//      usuario.username[indice] = caracter;
//      user[indice] += caracter;
//      indice++;
//    } else {
//      usuario.username[indice] = '\0';
//      break;
//    }
//  }
//
//  indice = 0;
//  while (Serial.available()) {
//    caracter = Serial.read();
//    if (caracter != ',') {
//      usuario.password[indice] = caracter;
//      pass[indice] += caracter;
//      indice++;
//    } else {
//      usuario.password[indice] = '\0';
//      break;
//    }
//  }
//
//
//Serial.print(usuario.username);
//   Serial.print(',');
//   Serial.print(usuario.password);
//   Serial.print(',');

  
  
  bool salir = false;
  while(!salir){
    delay(500);
    if(Serial.available()>0){
    char opcion = Serial.read();
    switch(opcion){
      case 'a':
        inicioejercicio();
        return;
      case 'b':
        return;
      case 'c':
         medirpeso();
        return;
      }
  }
  
  
  }

}

void inicioejercicio(){
  int rep = 0;
  int HRC = 0;
  int RHR = 0;
  int promedioHR = 0;
  double Calorias = 0;
  float ritmoant = 0;
  float ritmoact = 0;
  int fuerzaa = 0;
  char caracter; // Almacena el caracter obtenido
  int indice = 0; // Para posicionarnos en los arreglos
  
  bufferLength = 100; //buffer length of 100 stores 4 seconds of samples running at 25sps

  //read the first 100 samples, and determine the signal range
  for (byte i = 0 ; i < bufferLength ; i++)
  {
    while (particleSensor.available() == false) //do we have new data?
      particleSensor.check(); //Check the sensor for new data

    redBuffer[i] = particleSensor.getRed();
    irBuffer[i] = particleSensor.getIR();
    particleSensor.nextSample(); //We're finished with this sample so move to next sample

//    Serial.print(F("red="));
//    Serial.print(redBuffer[i], DEC);
//    Serial.print(F(", ir="));
//    Serial.println(irBuffer[i], DEC);
  }

  //calculate heart rate and SpO2 after first 100 samples (first 4 seconds of samples)
  maxim_heart_rate_and_oxygen_saturation(irBuffer, bufferLength, redBuffer, &spo2, &validSPO2, &heartRate, &validHeartRate);

  //Continuously taking samples from MAX30102.  Heart rate and SpO2 are calculated every 1 second
  while (1)
  {
   
  
    //dumping the first 25 sets of samples in the memory and shift the last 75 sets of samples to the top
    for (byte i = 25; i < 100; i++)
    {
      redBuffer[i - 25] = redBuffer[i];
      irBuffer[i - 25] = irBuffer[i];
    }

    //take 25 sets of samples before calculating the heart rate.
    for (byte i = 75; i < 100; i++)
    {
      while (particleSensor.available() == false) //do we have new data?
        particleSensor.check(); //Check the sensor for new data

      digitalWrite(readLED, !digitalRead(readLED)); //Blink onboard LED with every data read

      redBuffer[i] = particleSensor.getRed();
      irBuffer[i] = particleSensor.getIR();
      particleSensor.nextSample(); //We're finished with this sample so move to next sample

    }

    maxim_heart_rate_and_oxygen_saturation(irBuffer, bufferLength, redBuffer, &spo2, &validSPO2, &heartRate, &validHeartRate);

    
//    Serial.print(heartRate, DEC);
//    Serial.print(",");
//    Serial.print(spo2, DEC);
//    Serial.print(",");
    
    HRC= HRC + heartRate;
    RHR++;
    promedioHR=HRC/RHR;
    Calorias = ((-55.0969 + (0.6309 * promedioHR)+ (0.1988*90) + (0.2017 *23)) / 4.184);

   static boolean newDataReady = 0;
  const int serialPrintInterval = 0; //increase value to slow down serial print activity

  // check for new data/start next conversion:
  if (LoadCell.update()) newDataReady = true;

  // get smoothed value from the dataset:
  if (newDataReady) {
  
      float i = LoadCell.getData();
      if(i<0){
        Serial.print('0.00');
      }else{
        Serial.print(i);
      }
      
      Serial.print(',');
      Serial.print(Calorias);
      Serial.print(',');
      ritmoact = i;
      
      newDataReady = 0;
      if(ritmoact<ritmoant){
        if(i<0){
        i = i * -1 ;
      }

        
        Serial.print(i);
        Serial.print(',');
        Serial.println(i);
      }else if (ritmoact == ritmoant){
        Serial.print("0");
        Serial.print(',');
        Serial.println("0");
      }else{
        if(i<0){
        i = i * -1 ;
      }
        Serial.print(i);
        Serial.print(',');
        Serial.println(i);
      }
      ritmoant = ritmoact;
    
  }

    delay(500);
    caracter = Serial.read();
    if (caracter == 'x') {
      delay(5000);
    while (Serial.available()) {
      caracter = Serial.read();
        Serial.print(caracter); 
  }
      break;
    }
 
   //frecuencia cardiaca
   //calorias
   //sensor de proximidad
   //oximetro
   //calculos

   
  //Aca vamos a empezar a tomar el tiempo, y los valores del ejercicio
  
  
}
}





void medirpeso(){

   static boolean newDataReady = 0;
  const int serialPrintInterval = 0; //increase value to slow down serial print activity

  // check for new data/start next conversion:
  if (LoadCell.update()) newDataReady = true;

  // get smoothed value from the dataset:
  if (newDataReady) {
  
      float i = LoadCell.getData();

      if(i<0){
        i = i * -1 ;
      }
      
      Serial.print(i);
      Serial.print(',');
      Serial.println('d');
      newDataReady = 0;
    
  }
}
