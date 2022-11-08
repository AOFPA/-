Blockly.Arduino.dht22_config= function(block) {
    var pin = block.getFieldValue('PINOUT');
    // var unit = block.getFieldValue('unit');
    // TODO: Assemble JavaScript into code variable.
    //define
    Blockly.Arduino.definitions_['define_dht22_config'] = 
     `#include "DHT.h"`;

    
    Blockly.Arduino.definitions_[`define_dht22_${pin}_config`] =   
    `   
    #define DHTPIN_${pin}  ${pin}
    #define DHTTYPE_${pin} DHT22
    DHT dht_${pin}(DHTPIN_${pin}, DHTTYPE_${pin});`
   

   // setup
   Blockly.Arduino.setups_[`setup_dht22_config`] = "Serial.begin(115200);";

   Blockly.Arduino.setups_[`setup_dht22_${pin}_config`] =
   `dht_${pin}.begin();`;
  

var code = `
       float h_${pin} = dht_${pin}.readHumidity();
       float t_${pin} = dht_${pin}.readTemperature();
       float f_${pin} = dht_${pin}.readTemperature(true);
      
      `;

    return code;

    
  };

  