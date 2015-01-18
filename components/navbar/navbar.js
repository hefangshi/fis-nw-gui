F.define('navbar', function(Frequire, exports, module){module.exports = {
    template: "<ul class=\"fg-navbar\">\n    <li v-class=\"active: active==name\" v-on=\"click: onClick(this)\" v-repeat=\"items\">\n        <span class=\"glyphicon {{icon}}\"></span>\n        <span>{{name}}</span>\n    </li>\n</ul>",
    inherit: true,
    data: function(){
        return {
            active: "Release",
            items: [
                {
                    "name": "Release",
                    "icon": "glyphicon-play",
                    "view": "c-index",
                },
                {
                    "name": "Project",
                    "icon": "glyphicon-folder-open",
                    "view": "c-projects"
                },
                {
                    "name": "Setting",
                    "icon": "glyphicon-cog",
                    "view": "c-setting"
                }
            ]
        }
    },
    methods: {
        onClick: function(item){
            this.active = item.name;
            this.currentView = item.view;
        }
    }
};});