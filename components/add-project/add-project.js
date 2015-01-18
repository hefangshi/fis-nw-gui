var core = F.require('core');

module.exports = {
    template: __inline('./add-project.tpl.html'),
    inherit: true,
    components: {
        'c-folder-select': F.require('folder-select')
    },
    methods: {
    },
    created: function(){
        this.$on('folderSelected', function(folders){
            var projects = core.project.getProjectFromFolders(folders);
            this.settingProject = this.projects.length -1 + (projects.length == 0 ? 0 : 1);
            this.projects = this.projects.concat(projects);
            this.currentView = 'c-projects';
            return false;
        });
    }
};