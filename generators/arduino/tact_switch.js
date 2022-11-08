Blockly.Arduino.tact_sw_init = function (block) {
  const pin = block.getFieldValue('pin');
  // TODO: Assemble JavaScript into code variable.
  //define
  const tsw_pin = `TSW_${pin}`;
  const tsw_state = `TSW_${pin}_state`;

  Blockly.Arduino.definitions_['define_sw_' + pin] = `#define ${tsw_pin} ${pin}\nint ${tsw_state};`;
  //setup
  Blockly.Arduino.setups_['setup_sw_' + pin] = `pinMode(${tsw_pin},INPUT);`;

  let code = `${tsw_state} = digitalRead(${tsw_pin});\n`;
  return code;
};


//val
Blockly.Arduino.tact_sw_val = function (block) {
  var pin = block.getFieldValue('pin');

  const tsw_state = `TSW_${pin}_state`;

  var code = `${tsw_state}`;

  return [code, Blockly.Arduino.ORDER_NONE];
};


// Blockly.Arduino['buttonState'] = function (block) {
//   var dropdown_unit = block.getFieldValue('unit');
//   // TODO: Assemble JavaScript into code variable.
//   var code = dropdown_unit;
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Arduino.ORDER_NONE];
// };

// Blockly.Arduino.buttonState_Read = function () {
//   var dropdown_pin = this.getFieldValue('PIN');
//   var dropdown_button_State = this.getTitleValue('button_State');
//   //var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
//   Blockly.Arduino.setups_['setup_output' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
//   var code = dropdown_button_State + '= digitalRead(' + dropdown_pin + ');\n';
//   return code;
// };
// Blockly.Arduino.buttonPin = function () {
//   var dropdown_pin = this.getFieldValue('PIN');
//   var dropdown_buttonPin = this.getTitleValue('buttonPin');
//   var dropdown_button_State = this.getTitleValue('button_State');
//   Blockly.Arduino.definitions_['define_u8g' + dropdown_pin + dropdown_button_State] = 'int' + ' ' + dropdown_buttonPin + ' ' + '=' + ' ' + dropdown_pin + ';' + '\n' +
//     'int' + ' ' + dropdown_button_State + ' ' + '=' + ' ' + '0' + ';';
//   Blockly.Arduino.setups_['setup_input'] = 'pinMode(' + dropdown_buttonPin + ', INPUT);';
//   var code = dropdown_button_State + '= digitalRead(' + dropdown_buttonPin + ');\n';
//   return code;
// };



