Blockly.Arduino.thermocouple = function (block) {
    const cs0_pin = block.getFieldValue('cs0_pin');
    const so_pin = block.getFieldValue('so_pin');
    const sck_pin = block.getFieldValue('sck_pin');
    const module = block.getFieldValue('module');
    // TODO: Assemble 


    //loop
    let code = '';
    let key = `${cs0_pin}${so_pin}${sck_pin}`;

    if (module == "MAX6675") {
        //define
        Blockly.Arduino.definitions_['thermo_MAX6675'] = `//https://www.arduino.cc/reference/en/libraries/max6675-library/
#include <max6675.h>`;
        Blockly.Arduino.definitions_['thermo_MAX6675_' + key] =
            `int thermoDO_${so_pin} = ${so_pin};
int thermoCS_${cs0_pin} = ${cs0_pin};
int thermoCLK_${sck_pin} = ${sck_pin};
MAX6675 thermocouple(thermoCLK_${sck_pin}, thermoCS_${cs0_pin}, thermoDO_${so_pin});
float thermoCelsius_${key} = 0;
float thermoFahrenheit_${key} = 0;
        `;

        // //setup
        // Blockly.Arduino.setups_['thermo_MAX6675_' + key] = 
        // `

        code = `thermoCelsius_${key} = thermocouple.readCelsius();
thermoFahrenheit_${key} = thermocouple.readFahrenheit();
        `;


    }
    return code;
};


Blockly.Arduino.thermo_value = function (block) {
    const so_pin = block.getFieldValue('so_pin');
    const cs_pin = block.getFieldValue('cs_pin');
    const sck_pin = block.getFieldValue('sck_pin');
    const unit = block.getFieldValue('unit');
    // TODO: Assemble JavaScript into code variable.
    const key = `${cs_pin}${so_pin}${sck_pin}`;

    let code = null;
    if (unit == "Celsius") {
        code = `thermoCelsius_${key}`;
    } else {
        code = `thermoFahrenheit_${key}`
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_NONE];
};