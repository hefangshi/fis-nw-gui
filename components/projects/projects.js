module.exports = {
    template: __inline('./projects.tpl.html'),
    inherit: true,
    components: {
        'c-project-info': F.require('project-info')
    },
    methods: {
        showProjectInfo: function(e){
            this.settingProject = $(e.target).attr('data-index');
        },
        addProject: function(){
            this.currentView = 'c-add-project';
        }
    }
};