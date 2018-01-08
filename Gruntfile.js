/*
 * Export Genericons
 */

'use strict';

module.exports = function(grunt) {

    var SOURCES = 'source/';

    var config = grunt.file.readYAML(SOURCES + 'fontcustom.yml');

    // Project configuration.
    grunt.initConfig({

        // generate a web font
        webfont: {
            icons: {
                src: SOURCES + 'svg/*.svg',
                dest: 'genericons',
                options: {
                    font: config['font_name'],
                    embed: config['base64'],
                    types: 'eot,woff2,woff,ttf,svg',
                    order: 'eot,woff,ttf,svg',
                    htmlDemo: false,
                    template: SOURCES + 'templates/' + config['templates'][0],
                    hashes: ! config['no_hash'],
                    templateOptions: {
                        classPrefix: config['css_selector'].slice(1).replace('{{glyph}}', '')
                    },
                    codepointsFile: 'codepoints.json',
                    fontHeight: config['font_em'],
                    descent: config['font_descent']
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