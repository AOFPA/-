Blockly.Arduino.TEMP_SENSOR = function () {

  const pin = this.getTitleValue('pin');

  Blockly.Arduino.definitions_['define_ds18b20'] = `#include <OneWire.h>
#include <DallasTemperature.h>
const int oneWireBus = ${pin};
OneWire oneWire(oneWireBus);
DallasTemperature sensors(&oneWire);
//value of unit
float temperatureC, temperatureF, temperatureK ;
`;

  Blockly.Arduino.setups_['setup_ds18b20'] = 'sensors.begin();';
  var code = `sensors.requestTemperatures();
temperatureC = sensors.getTempCByIndex(0);
temperatureF = sensors.getTempFByIndex(0);
temperatureK = temperatureC + 273.15 ;\n`;
  return code;
};

Blockly.Arduino['value_temp_senssor'] = function (block) {
  // const pin = block.getFieldValue('pin');
  const unit = block.getFieldValue('unit');

  var code = '';
  if (unit == 'C') {
    code = 'temperatureC';
  } else if (unit == 'F') {
    code = 'temperatureF';
  } else {
    code = 'temperatureK';
  }

  return [code, Blockly.Arduino.ORDER_NONE];
};

// Blockly.Arduino.temp_senssor_18B20 = function(){
//     var dropdown_VALUE_TEMP_SENSOR = this.getTitleValue('VALUE_TEMP_SENSOR');
//     // TODO: Assemble JavaScript into code variable.
//     var code = dropdown_VALUE_TEMP_SENSOR;
//     // TODO: Change ORDER_NONE to the correct strength.
//     return [code];
// };

