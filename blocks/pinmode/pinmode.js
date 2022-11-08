// define blocks
'use strict';
Blockly.Blocks['pinmode'] = {
    init: function() {
      this.appendValueInput("pin")
          .setCheck("Number")
          .appendField("PIN : ");
      this.appendDummyInput()
          .appendField("MODE :")
          .appendField(new Blockly.FieldDropdown([["INPUT","INPUT"], ["OUTPUT","OUTPUT"]]), "mode");
      this.setColour(230);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };