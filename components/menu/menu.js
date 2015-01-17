module.exports = {
    template: __inline('./menu.tpl.html'),
    inherit: true,
    methods: {
        onSetting: function(e){
            this.currentView = 'c-setting';
        },
        onHome: function(e){
            this.currentView = 'c-index';
        }
    }
};