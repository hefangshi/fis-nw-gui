F.define('command', function(Frequire, exports, module){module.exports = {
    template: "<div class=\"btn-group\" role=\"group\" aria-label=\"commands\">\n    <button type=\"button\" class=\"btn btn-default\" v-repeat=\"commands\">{{$key}}</button>\n</div>"
};});