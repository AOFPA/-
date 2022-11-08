Blockly.Arduino.LCD_TEST = function (block) {
  const addr = block.getFieldValue('addr');
  const size = block.getFieldValue('size');

  let size_arr = size.split('x');
  Blockly.Arduino.definitions_['define_u8g_lcd_i2c'] = '#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\nLiquidCrystal_I2C lcd(' + addr + ',' + size_arr[0] + ',' + size_arr[1] + ');';
  Blockly.Arduino.setups_['setup_u8g'] = 'lcd.init();  \n' + '  ' + 'lcd.backlight();'
  var code = '';
  return code;
};

Blockly.Arduino.SET_CURSOR = function () {
  var dropdown_CurSorRow = this.getTitleValue('CurSorRow');
  var dropdown_LCD_I2C_CurSorCol = this.getTitleValue('CurSorCol');
  var code = 'lcd.setCursor(' + dropdown_CurSorRow + ',' + dropdown_LCD_I2C_CurSorCol + ');\n';
  return code;
};

// Blockly.Arduino.LCD_PRINT = function() {
//   var dropdown_print = this.getTitleValue('print');
//   var code='lcd.print('+ dropdown_print +');\n';
//   return code;
// };

Blockly.Arduino.LCD_PRINT_TEXT = function () {
  var value_text = Blockly.Arduino.valueToCode(this, 'Text', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
  var code = 'lcd.print(' + value_text + ');\n';
  return code;
};

Blockly.Arduino.LCD_CLEAR = function () {
  var code = 'lcd.clear();\n';
  return code;
};