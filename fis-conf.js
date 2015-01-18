fis.config.set('modules.parser.less', 'less');
fis.config.set('roadmap.ext.less', 'css');
fis.config.set('modules.postpackager', ['autoload', function(ret){
    fis.util.map(ret.src, function(subpath, file){
        if (file._isText){
            var content = file.getContent().replace(/__DOMAIN_PLACE_HOLDER__\//g, '');
            file.setContent(content);
        }
    });
}]);
fis.config.set('settings.postpackager.autoload.notice.exclude', '**');
fis.config.set('settings.postprocessor.jswrapper.type', 'amd');
fis.config.set('roadmap.domain', '__DOMAIN_PLACE_HOLDER__');
fis.config.set('settings.postprocessor.jswrapper.template', 'F.define(\'${id}\', function(Frequire, exports, module){${content}});');
fis.config.set('roadmap.path', [
    {
        reg: /\/components\/([^\/]+)\/\1\.js$/,
        id: '$1',
        isMod: true
    },
    {
        reg: 'components/**.tpl.html',
        release: false
    },
    {
        reg: '**.css',
        useStandard: false
    }
]);

fis.config.set('modules.deploy', ['default', 'git']);
fis.config.set('settings.deploy.git', {
    ghpages: {
        from : '/',
        to: '/',
        remote: 'https://' + process.env.GIT_NAME + ':' + process.env.GH_TOKEN + '@github.com/hefangshi/fis-nw-gui',
        branch: 'gh-pages',
        silent: true,
        deepSilent: true
    }
});