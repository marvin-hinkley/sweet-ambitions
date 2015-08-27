module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Lint JS files
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },

            //Gruntfile and all js files in src
            build: ['Gruntfile.js', 'src/**/*.js', '!src/libs/**']
        },
        
        //Clean out production directory
        clean : {
            build: {
                src: ['dist/']
            }
        },
        
        copy: {
            js: {
                files: [
                    {expand: true, flatten: true, src: ['src/**/*.js'], dest: 'dist/js', filter: 'isFile'}
                ],
            },
            index: {
                files: [
                    {expand: true, flatten: true, src: ['src/index.html', 'src/favicon.ico'], dest: 'dist/', filter: 'isFile'}
                ],
            },
            html: {
                files: [
                    {expand: true, flatten: true, src: ['src/**/*.html', '!src/index.html'], dest: 'dist/views', filter: 'isFile'}
                ],
            },
            assets: {
                files: [
                    {expand: true, src: ['**'], dest: 'dist/img', cwd: 'src/img/'},
                    {expand: true, flatten: true, src: ['src/fonts/**'], dest: 'dist/fonts', filter: 'isFile', nonull: true}
                ],
            },
            libs: {
                files: [
                    {expand: true, src: ['**'], dest: 'dist/libs', cwd: 'src/libs/', nonull: true}
                ],
            }
        },
        
        //Minify and compress js files
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            app: {
                files: {
                    'dist/js/app.min.js': [
                        'dist/**/*.js'
                    ]
                }
            }
        },

        //Compile SASS files via compass
        compass: {
            dev: {
                options: {
                    sassDir: 'src',
                    cssDir: 'dist/css',
                    //importPath: ['sass_libs'],
                    environment: 'development',
                    outputStyle: 'expanded',
                    sourcemap: true,
                    force: true
                }
            },
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'dist/css',
                    imagesDir: 'dist/img',
                    //importPath: ['sass_libs'],
                    environment: 'production',
                    outputStyle: 'compressed',
                    sourcemap: true,
                    force: true
                }
            }
        },
        
        //Auto-run grunt tasks
        watch: {
            stylesheets: {
                files: ['src/**/*.scss'],
                tasks: ['compass:dev', 'beep']
            },
            scripts: {
                files: 'src/**/*.js',
                tasks: ['jshint', 'copy:js', 'beep']
            },
            html: {
                files: 'src/**/*.html',
                tasks: ['copy:html', 'copy:index']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-beep');

    grunt.registerTask('default', ['jshint', 'clean', 'compass:dev', 'copy', 'beep']);
    grunt.registerTask('run', ['jshint', 'clean', 'compass:dev', 'copy', 'beep', 'watch']);
    grunt.registerTask('dist', ['jshint', 'uglify', 'compass:dist', 'beep']);
};