module.exports = {
    template: __inline('./navbar.tpl.html'),
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
                    "name": "Projects",
                    "icon": "glyphicon-folder-open",
                    "view": "c-projects"
                },
                {
                    "name": "Settings",
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
};