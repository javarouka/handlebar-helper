module.exports = function(grunt) {

    "use strict";

    grunt.initConfig({

        clean: {
            build: {
                src: ["build/**"]
            },
            buildAfter: {
                src: ["src/main/uglify"]
            }
        },

        copy: {
            build: {
                expand: true,
                cwd: 'src/main/uglify',
                src: '**',
                dest: 'build/',
                flatten: true,
                filter: 'isFile'
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'src/main/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        qunit: {
            all: {
                options: {
                    urls: [
                        'http://javarouka.coupang.com:19800/src/test/index.html'
                    ]
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 19800,
                    base: '.'
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! Handlebars Helper - <%= grunt.template.today("yyyy-mm-dd") %>*/\n',
                mangle: false
            },
            build: {
                files: grunt.file.expandMapping(['src/main/**/*.js'], 'src/main/uglify/', {
                    rename: function(destBase, destPath) {
                        return destBase+destPath.replace('.js', '.min.js');
                    }
                })
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('test', [ 'connect', 'qunit' ]);
    grunt.registerTask('build', [ 'clean', 'jshint', 'connect', 'qunit', 'uglify:build', 'copy:build', 'clean:buildAfter']);

};