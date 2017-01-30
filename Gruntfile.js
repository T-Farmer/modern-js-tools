module.exports = (grunt) => {

  // Project configuration.
  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true,
            outputStyle: 'compressed',
        },
        dist: {
            files: {
                'main.css': 'main.scss',
            }
        },
        watch: {
          sass: {
            files: ['**/*.scss'],
            tasks: ['sass'],
          }
        }
    },
  });

  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch')

  // Default task(s)
  grunt.registerTask('default', ['sass']);

};
