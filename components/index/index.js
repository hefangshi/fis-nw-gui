var core = F.require('core');

module.exports = {
    template: __inline('./index.tpl.html'),
    data: function(){
        return {
            commands: core.command.getCommands()
        }
    },
    components: {
        'c-folder-select': F.require('folder-select'),
        'c-command': F.require('command')
    }
};