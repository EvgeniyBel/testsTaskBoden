exports.config = {
    allScriptsTimeout: 1800000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: "https://www.boden.co.uk/",
    getPageTimeout: 45000,
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,

    specs: [
        'e2e/tests/*.feature'
    ],

    capabilities: {
        browserName: "chrome",
        acceptInsecureCerts: true,
        shardTestFiles: false,
        maxInstances: 1,
        chromeOptions: {
            w3c: false,
            args: [
                "--headless",
                "no-sandbox",
                "--disable-gpu",
                "--window-size=1920,1080"
            ],
        },
    },

    cucumberOpts: {
        require: [
            './e2e/**/*.steps.js',
        ],
        strict: true,
        format: ["progress"],
        monochrome: true,
        plugin: "json"
    },
};
