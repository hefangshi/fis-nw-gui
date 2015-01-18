F.define('projects', function(Frequire, exports, module){module.exports = {
    template: "<!-- <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n  <div class=\"panel\" v-repeat=\"projects\">\n    <div class=\"panel-heading\" role=\"tab\" id=\"project-{{$index}}\">\n      <h4 class=\"panel-title\">\n        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n          {{name}}\n        </a>\n      </h4>\n    </div>\n    <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"project-{{$index}}\">\n        <c-project-info v-with=\"$data\"></c-project-info>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"panel panel-default project-panel\" v-repeat=\"projects\">\n  <!-- Default panel contents -->\n  <div class=\"panel-heading\" v-on=\"click: showProjectInfo\" data-index=\"{{$index}}\" v-style=\"border-bottom-width: $parent.now==$index ? 1 : 0\">{{name}}</div>\n  <div class=\"panel-body\" v-show=\"$parent.now==$index\" v-transition=\"expand\">\n    <c-project-info v-with=\"$data\" class=\"panel-body-wrap\"></c-project-info>\n  </div>\n</div>",
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
};});