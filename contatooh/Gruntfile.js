module.exports = function (grunt) {
    grunt.initConfig({
        tarefa1: {
            /* configurações da tarefa1 */
        },
        tarefa2: {
            /* configurações do tarefa2 */
        },
        copy: {
            project: {
                expand: true,
                cwd: '.',
                src: ['**', '!Gruntfile.js', '!package.json', '!bower.json'],
                dest: 'dist'
            }
        },
        clean: {
            dist: {
                src: 'dist'
            }
        }
    });

    grunt.registerTask('default', ['dist']); //grunt sem parametros
    grunt.registerTask('dist', ['clean', 'copy']);
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
};