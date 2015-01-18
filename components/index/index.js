var core = F.require('core');

module.exports = {
    template: __inline('./index.tpl.html'),
    inherit: true,
    data: function(){
        return {
            commands: core.command.getCommands()
        }
    },
    components: {
        'c-folder-select': F.require('folder-select'),
        'c-command': F.require('command')
    },
    methods: {
        goSetting: function(index){
            this.settingProject = index;
            this.currentView = 'c-projects';
        }
    }
};