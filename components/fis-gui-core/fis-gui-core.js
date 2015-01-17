module.exports = {
    command: {
        getCommands : function(){
            return {
                "publish": 'cuompD',
                "develop": ''
            }
        }
    },
    project: {
        getProjects : function(){
            return [
                {
                    name: 'home',
                    path: '/home/work/code/home',
                    dest: 'output'
                },
                {
                    name: 'map',
                    path: '/home/work/code/map',
                    dest: 'remote'
                }
            ]
        }
    }
}