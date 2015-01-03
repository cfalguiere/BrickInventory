module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      //'app/view*/**/*.js',
      'app/services/**/*.js',
      'app/*.js',
      'test/unit/**/*.js',
      'test/integration/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    //browsers : ['Chrome'],
    //browsers : ['Firefox'],
    browsers : ['PhantomJS'],

    plugins : [
            //'karma-chrome-launcher',
            //'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
