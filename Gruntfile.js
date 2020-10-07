module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    // optionally read package.json
    pkg: grunt.file.readJSON('package.json'),

    // Metadata
    meta: {
      basePath: '../',             // your project path
      srcPath: 'assets/sass/',  // where you keep your sass files
      jsPath: 'assets/js/',  // where you keep your sass files
      deployPath: 'assets/css/', // where you want your compiled css files
      contentPath: 'content/' // where you want your compiled content files
    },

    // IMPORTANT: the task configuration
    sass: {
      dist: {
        files: [{
          "assets/css/main.css" : "assets/sass/main.scss",
          "assets/css/responsive.css" : "assets/sass/responsive.scss",
        }]
      }
    },
    // watch all .scss files under the srcPath
    watch: {
      scripts: {
        files: [
          '<%= meta.srcPath %>/*.scss'
        ],
        tasks: ['sass']
      },
      options: {
        livereload: true,
      },
      html: {
        files: ['./index.html','<%= meta.srcPath %>/*.scss'],
        options: {
          livereload: true
        }
      },
      triggerLiveReloadOnTheseFiles: {
        // We use this target to watch files that will trigger the livereload
        options: { livereload: true },
        files: [
          // Anytime css is edited or compiled by sass, trigger the livereload on those files
          '<%= meta.srcPath %>/*.scss',
          '<%= meta.jsPath %>/*.js',
        ]
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'assets/css/*.css',
            'index.html',
            'content/*.html',
            'assets/js/*.js'
          ]
        },
        options: {
          watchTask: true,
          host: "vcb.test"
        }
      }
    }
  });
  

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task
  grunt.registerTask('default', ['browserSync', 'sass', 'watch']);
};
