Blockly.Arduino.pinmode = function (block) {


    // ---------------------------------------------------------
  
    var pin = Blockly.Arduino.valueToCode(block,'pin',Blockly.Arduino.ORDER_AUTOMIC);
    console.log(pin)
    var mode = block.getFieldValue('mode');
    // var state = block.getFieldValue('State');
  
    //ส่วน Define
    // pin_df = 'RELAY_PIN_' + pin
    // Blockly.Arduino.definitions_['define_' + pin_df] = '#define ' + pin_df + ' ' + pin + '\n';
  
  
    //void setup
    Blockly.Arduino.setups_['setup_' + pin] = `pinMode(${pin},${mode});`;
  
    //void loop
    // var code = 'digitalWrite(' + pin_df + ',' + state + ');\n';
    // return code;
    var code = '';
  
    return  code;
  
  
    //-------------------------------------------------------
  };
  