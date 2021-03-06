module.exports = {
    template: __inline('./folder-select.tpl.html'),
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
};