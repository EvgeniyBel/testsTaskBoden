
exports.config = {
    allScriptsTimeout: 30000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: "https://www.boden.co.uk/",
    directConnect: true,

    specs: [
        'e2e/tests/*.feature'
    ],

    onPrepare: function () {
        browser.manage().window().maximize();
    },

    capabilities: {
        browserName: "chrome",
        acceptInsecureCerts: true,
        shardTestFiles: false,
        maxInstances: 1,
        chromeOptions: {
            args: [
                "--no-sandbox",
                "--test-type=browser",
                "--disable-infobars",
                "--disable-extensions",
                "verbose",
                "log-path=/tmp/chromedriver.log",
                "--disable-web-security",
                "--allow-running-insecure-content",
                "--allow-cross-origin-auth-prompt",
                'disable-infobars=true',
                '--disable-popup-blocking'
                //"--headless",
            ],
            'prefs': {
                'credentials_enable_service': false
            }
        },
    },

    cucumberOpts: {
        require: [
            './e2e/**/*.steps.js',
        ],
        strict: true,
    },
};
