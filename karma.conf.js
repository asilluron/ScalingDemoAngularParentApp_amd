var karma_config = require("./config/karma");

module.exports = function (config) {
    "use strict";

    karma_config["logLevel"] = config.LOG_INFO;
    config.set(karma_config);
};