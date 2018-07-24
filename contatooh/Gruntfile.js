module.exports = function (grunt) {
    grunt.initConfig({
        tarefa1: {
            /* configurações da tarefa1 */
        },
        tarefa2: {
            /* configurações do tarefa2 */
        },
        copy: {
            /* configurações da tarefa grunt-contrib-copy */
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-copy');
};