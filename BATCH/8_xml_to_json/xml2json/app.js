const xmlparser = require('xml2json-light');
let xml = '<person><name>JOHN DOE</name></person>';
let json = xmlparser.xml2json(xml);
console.log(json);

const json2xml = require('json2xml');
let jsonInput = {address:{
    name:"akash",
    age:22
}};
let result = json2xml(jsonInput);
console.log(result);