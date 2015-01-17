module.exports = {
    template: __inline('./project.tpl.html'),
    inherit: true,
    components: {
        'c-folder-select': F.require('folder-select')
    },
    methods: {
        onOK: function(){
            this.$dispatch('addProject', {
                path: this.$.folderSelect.folderPath
            });
            this.currentView = 'c-index';
        }
    }
};