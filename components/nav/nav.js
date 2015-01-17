module.exports = {
    template: __inline('./nav.tpl.html'),
    inherit: true,
    methods: {
        onClick: function(e){
            this.currentView = $(e.target).attr('data-view');
        }
    }
};