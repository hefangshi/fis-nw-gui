module.exports = {
    template: __inline('./menu.tpl.html'),
    inherit: true,
    methods: {
        // onSetting: function(e){
        //     this.currentView = 'c-setting';
        // },
        onHome: function(e){
            this.currentView = 'c-nav';
        },
        onClose: function(){
            window.close();
        },
        onRefresh: function(){
            window.location.href =window.location.href;
        },
        // onViewClick: function(e){
        //     this.currentView = $(e.target).attr('data-view');
        // }
    }
};