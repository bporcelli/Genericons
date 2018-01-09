/*
 * Export Genericons
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // generate the web font
        webfont: {
            icons: {
                src: 'svg/*.svg',
                dest: 'genericons',
                options: {
                    font: 'Genericons',
                    embed: true,
                    types: 'eot,woff2,woff,ttf,svg',
                    order: 'eot,woff,ttf,svg',
                    template: 'templates/genericons.css',
                    hashes: false,
                    templateOptions: {
                        classPrefix: 'genericon-'
                    },
                    codepointsFile: 'codepoints.json',
                    fontHeight: 2048,
                    descent: 0
                }
            }
        },

        // minify web font css
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'genericons/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'genericons/',
                    ext: '.min.css'
                }]
            }
        },
    });


    // load the webfont creater
    grunt.loadNpmTasks('grunt-webfont');

    // load the css minifier
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['webfont', 'cssmin']);

};