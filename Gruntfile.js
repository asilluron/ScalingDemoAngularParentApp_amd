/*global require:false*/
module.exports = function (grunt) {
	"use strict";

	var merge = require('deepmerge');

	var plugins = [
		'grunt-confidence',
		'grunt-bower-task',
		'grunt-contrib-concat',
		'grunt-contrib-copy',
		'grunt-contrib-clean',
		'grunt-contrib-watch',
		'grunt-contrib-requirejs',
		'grunt-karma',
		'grunt-angular-templates',
		'grunt-contrib-yuidoc',
		'grunt-concurrent',
		'grunt-open',
		'grunt-contrib-connect'
	];

	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		dirs: {
			config: 'config',
			fixtures: 'config/fixtures',
			exports: 'exports',
			app: 'src/app'
		},
		bower: {
			install: {
				options: {
					targetDir: "./src/vendor",
					cleanup: true, //Must leave this as true when using sub-repos that have a sliding tag or if using a branch instead of a tag
					layout: "byComponent"
				}
			}
		},
		connect: {
			development: {
				options: {
					port: 8000,
					base: './src',
					keepalive: true
				}
			}
		},
		open: {
			server: {
				path: 'http://localhost:8000/',
				app: 'Google Chrome'
			}
		},
		copy: {
			emptytemplates: {
				src: '<%= dirs.config %>/fixtures/templates.nocache.js',
				dest: '<%= dirs.app %>/templates.js'
			}
		},
		confidence: {
			karmalocal: {
				files: {
					'<%= dirs.config %>/karma/index.js': '<%= dirs.config %>/karma.conf.json'
				},
				options: {
					criteria: {
						target: "local"
					},
					amd: false,
					commonJS: true
				}
			},
			karmacd: {
				files: {
					'<%= dirs.config %>/karma/index.js': '<%= dirs.config %>/karma.conf.json'
				},
				options: {
					criteria: {
						target: "jenkins"
					},
					amd: false,
					commonJS: true
				}
			},
			require_testable: {
				files: {
					'<%= dirs.config %>/tmp/main-karma.config.json': '<%= dirs.config %>/require.config.json'
				},
				options: {
					criteria: {
						target: "test"
					},
					amd: false
				}
			},
			require_prod: {
				files: {
					'<%= dirs.config %>/requirejs/main-prod.config.js': '<%= dirs.config %>/require.config.json'
				},
				options: {
					criteria: {
						target: "production"
					},
					amd: false,
					commonJS: true
				}
			},
			require_demo: {
				files: {
					'<%= dirs.config %>/tmp/main-demo.config.json': '<%= dirs.config %>/require.config.json'
				},
				options: {
					criteria: {
						target: "demo"
					},
					amd: false
				}
			},
			prodconfig: {
				files: {
					'<%= dirs.app %>/config.js': '<%= dirs.config %>/app.config.json'
				},
				options: {
					criteria: {
						env: "production"
					},
					amd: true
				}
			},
			testconfig: {
				files: {
					'<%= dirs.app %>/config.js': '<%= dirs.config %>/app.config.json'
				},
				options: {
					criteria: {
						env: "nonproduction"
					},
					amd: true
				}
			}
		},
		watch: {
			confidence: {
				files: ['<%= dirs.config %>/*.json'],
				tasks: ["confidence"]
			}
		},
		karma: {
			local: {
				configFile: 'karma.conf.js',
				runnerPort: 9876,
				autoWatch: true,
				singleRun: false
			}
		},
		concurrent: {
			local: {
				tasks: ["karma:local", "watch:confidence", "connect:development"],
				options: {
					limit: 3,
					logConcurrentOutput: true
				}
			}
		},
		ngtemplates: {
			dist: {
				options: {
					base: 'src',
					module: 'blog.templates',
					bootstrap: function (module, script) {
						return 'define([], function() { return function($templateCache){ ' + script + ' }; });';
					}
				},
				src: ['src/app/**/*.html'],
				dest: 'src/app/templates.js'
			}
		},
		concat: {
			require_test_config: {
				options: {
					banner: "//Auto-Generated, DO NOT EDIT\n"
				},
				src: ["<%= dirs.fixtures %>/test-require-header.js",
					"<%= dirs.config %>/tmp/main-karma.config.json",
					"<%= dirs.fixtures %>/test-require-footer.js"
				],
				dest: "<%= dirs.app %>/main-test.js"
			},
			require_demo_config: {
				options: {
					banner: "//This file is auto-generated, do not edit\n"
				},
				src: ["<%= dirs.fixtures %>/demo-require-header.js", "<%= dirs.config %>/tmp/main-demo.config.json",
					"<%= dirs.fixtures %>/demo-require-footer.js"
				],
				dest: "<%= dirs.app %>/main-demo.js"
			}
		},
		requirejs: {
			deploy: {
				options: merge(require("./config/requirejs/main-prod.config.js"), {
					baseUrl: "src/",
					name: "app/app",
					out: "dist/app.js",
					include: "vendor/requirejs/require",
					optimize: "none"
				})
			},
			deploy_min: {
				options: merge(require("./config/requirejs/main-prod.config.js"), {
					baseUrl: "src/",
					name: "app/app",
					out: "dist/app.min.js",
					include: "vendor/requirejs/require",
					optimize: "uglify"
				})
			}
		}
	};

	grunt.initConfig(gruntConfig);

	for (var i = 0; i < plugins.length; i++) {
		grunt.loadNpmTasks(plugins[i]);
	}


	grunt.registerTask('default', ['local']);

	grunt.registerTask('local', [
		'copy:emptytemplates',
		'confidence:karmalocal',
		'confidence:require_testable',
		'confidence:require_demo',
		'concat:require_test_config',
		'concat:require_demo_config',
		'open:server',
		'concurrent:local'
	]);

	grunt.registerTask('deploy', [
		'bower:install',
		'confidence:require_prod',
		'concat:require_demo_config',
		'ngtemplates:dist',
		'requirejs:deploy',
		'requirejs:deploy_min'
	]);
};