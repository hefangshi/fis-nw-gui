F.define('project-info', function(Frequire, exports, module){module.exports = {
    template: "<div class=\"project-info\">\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\">Name</span>\n        <input type=\"text\" class=\"form-control\" v-model=\"name\">\n    </div>\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\">Source</span>\n        <input type=\"text\" class=\"form-control\" v-model=\"path\">\n        <span class=\"input-group-btn\">\n            <button class=\"btn btn-info\" type=\"button\">Select</button>\n        </span>\n    </div>\n    <div class=\"input-group\">\n        <span class=\"input-group-addon\">Dest</span>\n        <input type=\"text\" class=\"form-control\" v-model=\"name\">\n    </div>\n    <div>\n        <label>\n            <input type=\"checkbox\" v-model=\"watch\">\n            Watch\n        </label>\n        <label>\n            <input type=\"checkbox\" v-model=\"live\">\n            Live\n        </label>\n    </div>    \n</div>\n"
};});