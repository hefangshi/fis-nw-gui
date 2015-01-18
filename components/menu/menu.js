F.define('menu', function(Frequire, exports, module){module.exports = {
    template: "<div class=\"btn-group btn-group-sm nav\" role=\"group\" aria-label=\"nav\">\n    <button type=\"button\" class=\"btn btn-default\" v-repeat=\"nav\" v-on=\"click: onViewClick\" data-view=\"{{$key}}\">{{$value}}</button>\n</div>\n<div class=\"btn-group menu\" role=\"group\" aria-label=\"control\">\n    <button type=\"button\" class=\"btn btn-default\" aria-label=\"Close\" v-on='click:onHome'>\n     <span class=\"glyphicon glyphicon-home\"></span>\n    </button>\n    <button type=\"button\" class=\"btn btn-default\" aria-label=\"Close\" v-on='click:onSetting'>\n     <span class=\"glyphicon glyphicon-cog\"></span>\n    </button>\n    <button type=\"button\" class=\"btn btn-default\" aria-label=\"Close\" v-on='click:onRefresh'>\n     <span class=\"glyphicon glyphicon-refresh\"></span>\n    </button>\n    <button type=\"button\" class=\"btn btn-default\" aria-label=\"Close\" v-on='click:onClose'>\n         <span class=\"glyphicon glyphicon-remove\"></span>\n    </button>\n    </div>\n</div>",
    inherit: true,
    methods: {
        onSetting: function(e){
            this.currentView = 'c-setting';
        },
        onHome: function(e){
            this.currentView = 'c-nav';
        },
        onClose: function(){
            window.close();
        },
        onRefresh: function(){
            window.location.href =window.location.href;
        },
        onViewClick: function(e){
            this.currentView = $(e.target).attr('data-view');
        }
    }
};});