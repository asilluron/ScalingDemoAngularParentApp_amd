;

require_config["callback"] = function () {
        "use strict";
        requirejs(["app/bootstrap"], function () {

        });
    };

requirejs.config(require_config);