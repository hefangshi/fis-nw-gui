F.define('add-project', function(Frequire, exports, module){var core = F.require('core');

module.exports = {
    template: "<c-folder-select v-ref=\"folderSelect\" class=\"group\" v-with=\"height: '430px'\"></c-folder-select>",
    inherit: true,
    components: {
        'c-folder-select': F.require('folder-select')
    },
    methods: {
    },
    created: function(){
        this.$on('folderSelected', function(folders){
            var projects = core.project.getProjectFromFolders(folders);
            this.projects = this.projects.concat(projects);
            this.currentView = 'c-projects';
            return false;
        });
    }
};});