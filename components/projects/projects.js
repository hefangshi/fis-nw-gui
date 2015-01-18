module.exports = {
    template: __inline('./projects.tpl.html'),
    inherit: true,
    data: function(){
        return {
            now: 0
        }
    },
    components: {
        'c-project-info': F.require('project-info')
    },
    methods: {
        showProjectInfo: function(e){
            this.now = $(e.target).attr('data-index');
        }
    }
};