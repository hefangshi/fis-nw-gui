F.define('index', function(Frequire, exports, module){var core = F.require('core');

module.exports = {
    template: "<div class=\"main\">\n    <c-command v-with=\"commands: commands\" class=\"group\"></c-command>\n</div>",
    data: function(){
        return {
            commands: core.command.getCommands()
        }
    },
    components: {
        'c-folder-select': F.require('folder-select'),
        'c-command': F.require('command')
    }
};});