(function () {
        "use strict";

        var tests = [];
        for (var file in window.__karma__.files) {
            if (window.__karma__.files.hasOwnProperty(file)) {
                if (/^\/base\/spec\//i.test(file) && /Spec\.js$/.test(file)) {
                    tests.push(file);
                }
            }
        }

        var require_config =