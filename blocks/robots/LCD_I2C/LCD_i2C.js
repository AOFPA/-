// define blocks
'use strict';

Blockly.Blocks['LCD_TEST'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("LCD I2C INIT");
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/image/LCD.PNG", 125, 80, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("address")
      .appendField(new Blockly.FieldDropdown([["0x27", "0x27"], ["0x3F", "0x3F"]]), "addr");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("size")
      .appendField(new Blockly.FieldDropdown([["16x2", "16x2"], ["20x4", "20x4"]]), "size");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['SET_CURSOR'] = {
  init: function () {
    this.appendDummyInput("")
      .appendField("LCD Set Cursor");
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/image/LCD.PNG", 125, 80, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput("")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Column : ")
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"]]), "CurSorRow")
    this.appendDummyInput("")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Row : ")
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"]]), "CurSorCol");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['LCD_PRINT_TEXT'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("LCD Print")
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("/image/LCD.PNG", 125, 80, { alt: "*", flipRtl: "FALSE" }));
    this.appendValueInput("Text", 'String')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Text");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
  }
};

Blockly.Blocks['LCD_CLEAR'] = {
  init: function () {
    this.setColour("#646464");
    this.setHelpUrl('');
    this.appendDummyInput("")
      .appendField("LCD CLEAR")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT91);
  }
};