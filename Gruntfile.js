module.exports = function(grunt){
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dest/minified.js': ['main.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify'); // load the given tasks
  grunt.registerTask('default', ['uglify']); // Default grunt tasks maps to grunt
};
