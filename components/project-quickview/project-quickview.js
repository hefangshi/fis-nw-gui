module.exports = {
    template: __inline('./project-quickview.tpl.html'),
    inherit: true,
    components: {
        'c-folder-select': F.require('folder-select'),
        'c-command': F.require('command')
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