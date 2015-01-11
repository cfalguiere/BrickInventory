exports.config = {

  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  //baseUrl: 'http://localhost:8000/app/',
  baseUrl: 'http://web:80/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
