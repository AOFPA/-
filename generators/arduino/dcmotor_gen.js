Blockly.Arduino.dcmotor_config = function (block) {
    var pin = block.getFieldValue('PINOUT');
    var state = block.getFieldValue('state');
    // TODO: Assemble JavaScript into code variable.
    //define
    pin_df = 'DC_MOTOR_PIN' + pin
    Blockly.Arduino.definitions_['define_dcmotor_config' + pin_df] = '#define ' + pin_df + ' ' + pin;

    Blockly.Arduino.setups_[`setup_dcmotor_config_${pin_df}`] = `pinMode(${pin_df},OUTPUT);\n`;

    var code = 'digitalWrite(' + pin_df + ',' + state + ');\n';
    //   Motor will spin in full speed
    //   digitalWrite(motorPin, HIGH);
    return code;
};




//Motor Speed Control
Blockly.Arduino.mtSpeed_config = function (block) {
    var pin = block.getFieldValue('PINOUT');
    var speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);

    pin_df = 'mtSpeed_PIN' + pin;
    Blockly.Arduino.definitions_['define_mtSpeed_config'] = '#include <analogWrite.h>';
    Blockly.Arduino.definitions_['define_mtSpeed_config' + pin_df] = '#define ' + pin_df + ' ' + pin;

    Blockly.Arduino.setups_['setup_mtSpeed_config' + pin_df] =
        'pinMode(' + pin_df + ',OUTPUT);'

    var code = `analogWrite(${pin_df}, ${speed});`;

    return code;
};






//Spin Direction Control
Blockly.Arduino.mtDirection_config = function (block) {
    const pin1 = block.getFieldValue('IN1');
    const pin2 = block.getFieldValue('IN2');
    const mode = block.getFieldValue('MODE');

    //define
    const in1 = `in1_pin${pin1}`;
    const in2 = `in2_pin${pin2}`;

    Blockly.Arduino.definitions_['define_mtDirection_config_' + in1] = `#define ${in1} ${pin1}`;
    Blockly.Arduino.definitions_['define_mtDirection_config_' + in2] = `#define ${in2} ${pin2}`;


    Blockly.Arduino.setups_['setup_mtSpeed_config_' + in1] = `pinMode(${in1},OUTPUT) ;`;
    Blockly.Arduino.setups_['setup_mtSpeed_config_' + in2] = `pinMode(${in2},OUTPUT) ;`;


    let code = `//${mode}`;
    if (mode == "BRAKE") {
        code += `\ndigitalWrite(${in1},HIGH) ;\ndigitalWrite(${in2},HIGH) ;\n`;
    } else if (mode == "FORWARD") {
        code += `\ndigitalWrite(${in1},HIGH) ;\ndigitalWrite(${in2},LOW) ;\n`;
    } else if (mode == "BACKWARD") {
        code += `\ndigitalWrite(${in1},LOW) ;\ndigitalWrite(${in2},HIGH) ;\n`;
    } else {
        code += `\n//something wrong..`;
    }




    return code;
};