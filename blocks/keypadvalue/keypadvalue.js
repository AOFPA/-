'use strict';

Blockly.Blocks['KEYPAD_VALUE'] = {
    init: function () {
           
        this.appendDummyInput()
            .appendField("value : ")
            .appendField(new Blockly.FieldDropdown([
                ["key", "key"]
               
            ]), "pin");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};