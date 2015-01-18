F.define('index', function(Frequire, exports, module){var core = F.require('core');

module.exports = {
    template: "<div class=\"main\">\n    <div class=\"panel panel-primary\">\n            <!-- Default panel contents -->\n            <div class=\"panel-heading\">Projects List</div>\n            <c-project-quickview></c-project-quickview>\n        </ul>\n    </div>\n    <c-command v-with=\"commands: commands\" class=\"group\"></c-command>\n</div>",
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
};});