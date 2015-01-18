F.define('index', function(Frequire, exports, module){var core = F.require('core');

module.exports = {
    template: "<div class=\"main\">\n    <div class=\"panel panel-primary\">\n            <!-- Default panel contents -->\n            <div class=\"panel-heading\">Projects List</div>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item project-item\" v-repeat=\"projects\">\n                    <label>\n                        <input type=\"checkbox\"/>\n                        <span>{{name}}</span>\n                    </label>\n                    <div class=\"btn-group release-options\" role=\"group\">\n                        <button type=\"button\" class=\"btn btn-default watch-button\" \n                            v-class=\"watch ? 'btn-success' : 'btn-default'\"\n                            v-on=\"click:watch=!watch\">\n                            watch\n                        </button>\n                        <button type=\"button\" class=\"btn btn-default live-button\"\n                            v-class=\"live ? 'btn-success' : 'btn-default'\"\n                            v-on=\"click:live=!live\">\n                            live\n                        </button>\n                        <div class=\"btn-group\">\n                            <button class=\"btn btn-default dropdown-toggle dest-button\" type=\"button\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                            {{chosenDest}}<span class=\"caret\"></span>\n                            </button>\n                            <ul class=\"dropdown-menu\" role=\"menu\">\n                                <li v-repeat=\"dest\"><a href=\"#\">{{$value}}</a></li>\n                            </ul>\n                        </div>\n                        <button type=\"button\" class=\"btn btn-default setting-button\" v-on=\"click: goSetting($index)\">\n                            <span class=\"glyphicon glyphicon-cog\"></span>\n                        </button>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n    <c-command v-with=\"commands: commands\" class=\"group\"></c-command>\n</div>",
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
};});