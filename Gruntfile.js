module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      files: ['*.js', 'lib/**/*.js', 'test/**/*.js']
    },
    execute: {
      build: {
        options: {
          args: ['peg/sqlparser.pegjs', './lib/parse.js']
        },
        src: ['node_modules/pegjs/bin/pegjs']
      }
    },
    jasmine_node: {
      options: {
        coverage: {
          reportFile: 'coverage.json',
          print: 'summary', // none, summary, detail, both
          relativize: true,
          thresholds: {
            statements: 0,
            branches: 0,
            lines: 0,
            functions: 0
          },
          reportDir: 'coverage',
          report: ['lcov'],
          collect: [ // false to disable, paths are relative to 'reportDir'
            '*coverage.json'
          ],
          excludes: ['*_spec.js']
        },
        showColors: true,
        isVerbose: false,
        forceExit: true,
        match: '.',
        matchAll: false,
        specFolders: ['./test'],
        extensions: "js",
        specNameMatcher: 'spec',
        junitreport: {
          report: false,
          savePath: "./build/reports/jasmine/",
          useDotNotation: true,
          consolidate: true
        }
      },
      src: ['<%= jshint.files %>']
    },
  });

  grunt.loadNpmTasks('grunt-npm-install');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-jasmine-node-coverage');

  grunt.registerTask('default', ['npm-install', 'execute:build']);
  grunt.registerTask('test', ['npm-install', 'execute:build', 'jasmine_node']);
};