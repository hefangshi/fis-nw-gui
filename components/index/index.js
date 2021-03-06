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
        'c-command': F.require('command'),
        'c-project-quickview': F.require('project-quickview')
    },
    methods: {
        goSetting: function(index){
            this.settingProject = index;
            this.currentView = 'c-projects';
        },
        deleteProject: function(index){
            this.projects.splice(index, 1);
        }
    }
};