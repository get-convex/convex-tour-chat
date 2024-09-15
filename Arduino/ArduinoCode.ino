int buttonLEFT = 2;
int buttonRIGHT = 3;
int ledLeft = 6;
int ledRight = 7;
int buttonStateLeft = 0;
int buttonStateRight = 0;
int count = 0;
int pressTimes[10];
int holdTimes[10];

void setup() {
  pinMode(ledLeft, OUTPUT);
  pinMode(ledRight, OUTPUT);
  Serial.begin(9600);
  randomSeed(analogRead(0));
}

void loop() {
  
  count++;
  int randNum = random(0, 2);

  //Left LED on
  if (randNum == 0) {
    digitalWrite(ledLeft, HIGH);
    unsigned long startTime = millis();

    buttonStateLeft = digitalRead(buttonLEFT);

    //keeps LED on while button hasn't been pressed 
    while (digitalRead(buttonLEFT) != HIGH) {
      delay(1);
    }

    //button pressed
    if (digitalRead(buttonLEFT) == HIGH) {
      unsigned long pressTime = millis();
      pressTimes[count-1] = pressTime - startTime;

      while (digitalRead(buttonLEFT) == HIGH) {
        delay(1);
      }

      digitalWrite(ledLeft, 0);
      unsigned long releaseTime = millis();
      holdTimes[count-1] = releaseTime - pressTime;

    }

  //Right LED on
  } else if (randNum == 1) {
    digitalWrite(ledRight, HIGH);
    unsigned long startTime = millis();

    buttonStateRight = digitalRead(buttonRIGHT);

    //keeps LED on while button hasn't been pressed 
    while (digitalRead(buttonRIGHT) != HIGH) {
      delay(1);
    }

    //button pressed
    if (digitalRead(buttonRIGHT) == HIGH) {
      unsigned long pressTime = millis();
      pressTimes[count-1] = pressTime - startTime;

      while (digitalRead(buttonRIGHT) == HIGH) {
        delay(1);
      }

      digitalWrite(ledRight, 0);
      unsigned long releaseTime = millis();
      holdTimes[count-1] = releaseTime - pressTime;

    }

  }

  //ensures test runs only 10 times
  if (count == 10) {

    Serial.println("Press Times");
    for (int i = 0; i < 10; i++) {
      Serial.print(pressTimes[i]);
      Serial.println(" ");
    }

    Serial.println("Hold Times");
    for (int i = 0; i < 10; i++) {
      Serial.print(holdTimes[i]);
      Serial.println(" ");
    }

    exit(0);
  }

  delay(1000);
}