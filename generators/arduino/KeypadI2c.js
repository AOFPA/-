Blockly.Arduino.keypadi2c = function(block) {
    var dropdown_valueaddress = block.getFieldValue('valueAddress');
    
    
     Blockly.Arduino.definitions_['define_keypad'] = `
#include <Keypad_I2C.h>
#include <Keypad.h>
#include <Wire.h>`;
Blockly.Arduino.definitions_['define_address_'+dropdown_valueaddress] = `
//-------------------Start define I2C Address ${dropdown_valueaddress} --------------
#define I2CADDR_${dropdown_valueaddress} ${dropdown_valueaddress}  // กำหนด Address ของ I2C
                      // วิธีการหา Address ของ I2C สามารถดูได้จากลิงค์ข้างล่าง 
                      // https://www.myarduino.net/article/98
const byte ROWS_${dropdown_valueaddress} = 4;  
const byte COLS_${dropdown_valueaddress} = 4;  
char keys_${dropdown_valueaddress}[ROWS_${dropdown_valueaddress}][COLS_${dropdown_valueaddress}] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};
byte rowPins_${dropdown_valueaddress}[ROWS_${dropdown_valueaddress}] = {0, 1, 2, 3}; 
byte colPins_${dropdown_valueaddress}[COLS_${dropdown_valueaddress}] = {4, 5, 6, 7}; 
Keypad_I2C keypad( makeKeymap(keys_${dropdown_valueaddress}), rowPins_${dropdown_valueaddress}, colPins_${dropdown_valueaddress}, ROWS_${dropdown_valueaddress}, COLS_${dropdown_valueaddress}, I2CADDR_${dropdown_valueaddress}, PCF8574 );
//-------------------End define I2C Address ${dropdown_valueaddress} --------------
`;
    //void setup
     Blockly.Arduino.setups_['setup'] = 'Wire.begin();\n';
     Blockly.Arduino.setups_['setup_key'+dropdown_valueaddress] = `keypad.begin(makeKeymap(keys_${dropdown_valueaddress}) );\n`;

     //void loop
    var code = `

    char key = keypad.getKey();  


    `;
    return code;
  };