F.define('nav', function(Frequire, exports, module){module.exports = {
    template: "<div class=\"btn-group\" role=\"group\" aria-label=\"nav\">\n    <button type=\"button\" class=\"btn btn-default\" v-repeat=\"nav\" v-on=\"click: onClick\" data-view=\"{{$key}}\">{{$value}}</button>\n</div>",
    inherit: true,
    methods: {
        onClick: function(e){
            this.currentView = $(e.target).attr('data-view');
        }
    }
};});