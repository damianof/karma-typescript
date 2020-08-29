module.exports = function(config) {
    config.set({

        frameworks: ["mocha", "karma-typescript"],

        files: [
            { pattern: "src/**/*.ts" },
            { pattern: "tests/**/*.ts" }
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

		karmaTypescriptConfig: {
			"compilerOptions": {
				"target": "es2015",
				"module": "commonjs",
				"esModuleInterop": true,
				"noImplicitAny": true,
				"outDir": "tmp",
				"sourceMap": true,
				"types" : [
					"mocha",
					"chai",
					"node"
				],
				"baseUrl": ".",
				"paths": {
					"@/*": [
						"./src/*"
					]
				},
			}
		},

        reporters: ["spec", "karma-typescript"],

        browsers: ["ChromeHeadless"],

        singleRun: true
    });
};
