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
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
};