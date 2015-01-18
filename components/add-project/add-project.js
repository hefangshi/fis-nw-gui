F.define('add-project', function(Frequire, exports, module){var core = F.require('core');

module.exports = {
    template: "<span class=\"title light\">Add Project</span>\n<c-folder-select v-ref=\"folderSelect\" class=\"group\"></c-folder-select>\n<!-- <div class=\"panel-buttons\">\n    <button type=\"button\" class=\"btn btn-default\" v-on=\"click: this.currentView='c-index'\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" v-on=\"click: onOK\">OK</button>\n</div> -->",
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