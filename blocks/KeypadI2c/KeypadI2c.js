"use strict";
Blockly.Blocks['keypadi2c'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("KEYPAD I2C");
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("image/keypad.png", 150, 150, { alt: "*", flipRtl: "FALSE" }));
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Address I2C");
      this.appendValueInput("PinAddress")
          .setCheck(null)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldDropdown([
              ["0x20","0x20"], ["0x21","0x21"], ["0x22","0x22"],
              ["0x23","0x23"], ["0x24","0x24"], ["0x25","0x25"],
              ["0x26","0x26"], ["0x27","0x27"]
              
            
            ]), "valueAddress");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };