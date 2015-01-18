F.define('folder-select', function(Frequire, exports, module){module.exports = {
    template: "<div class=\"folderDrop\" v-on=\"drop:onDrop, \n    mouseover:onDragOver, \n    mouseleave:onDragLeave, \n    dragover:onDragOver, \n    dragleave:onDragLeave, \n    click:chooseFolder\" \n    v-class=\"hover:isHover\"\n    v-style=\"height:height,\n            line-height:height\">\n    <span class=\"light\">Drop folder here or click to choose</span>\n    <input name=\"file\" type=\"file\" class=\"folderChooser\" v-show=\"false\" multiple nwdirectory v-on=\"change: onChange\"/>\n</div>",
    data: function(){
        return {
            isHover: false
        }
    },
    methods: {
        onChange: function(e){
            this.$dispatch('folderSelected', [{
                path: $(e.target).val()
            }]);
        },
        onDrop: function(e){
            e.preventDefault();
            var file = e.dataTransfer.files[0];
            this.isHover = false;
            this.folderPath = file.path;
            this.$dispatch('folderSelected', e.dataTransfer.files);
            return false;
        },
        onDragLeave: function(e){
            this.isHover = false;
        },
        onDragOver: function(e){
            this.isHover = true;
        },
        chooseFolder: function(e){
            $(".folderChooser", this.$el).click();
        }
    },
    created: function(){
        window.ondragover = function(e) { e.preventDefault(); return false };
        window.ondrop = function(e) { e.preventDefault(); return false };
    }
};});