
const fs = require('fs');
var nconf = require('nconf');

var defaults = {
	"http_port": 8080,
};

var config_filename = "panaconda.conf";
var config_file = __dirname + "/" + config_filename;
if (!fs.statSync(config_file))
{
    config_file = "./" + config_filename;
}

module.exports = nconf.argv().env().file(config_file).defaults(defaults);


