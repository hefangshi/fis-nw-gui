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
                    chosenDest: 'output',
                    watch: true,
                    live: true,
                    dest: [
                        'output',
                        'remote'
                    ]
                },
                {
                    name: 'map',
                    path: '/home/work/code/map',
                    chosenDest: 'output',
                    watch: true,
                    live: false,
                    dest: [
                        'output',
                        'remote'
                    ]
                },

            ]
        },
        getProjectFromFolders: function(){
            return [
                {
                    name: 'common',
                    path: '/home/work/code/common',
                    chosenDest: 'output',
                    watch: false,
                    live: false,
                    dest: [
                        'output',
                        'remote'
                    ]
                }
            ];
        }
    }
}