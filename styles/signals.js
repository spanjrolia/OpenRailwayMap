
(function (MapCSS) {
    'use strict';

    function restyle(style, tags, zoom, type, selector) {
        var s_default = {};

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:main'] == 'hp' && tags['railway:signal:main:form'] == 'semaphore' && tags['railway:signal:main:function'] == 'entry') && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:main'] == 'hp' && tags['railway:signal:main:form'] == 'semaphore' && tags['railway:signal:main:function'] == 'block') && zoom >= 14)) {
            s_default['z-index'] = 10000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de:hp-semaphore.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:main'] == 'hp' && tags['railway:signal:main:form'] == 'light' && tags['railway:signal:main:function'] == 'entry') && zoom >= 14) || ((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:main'] == 'hp' && tags['railway:signal:main:form'] == 'light' && tags['railway:signal:main:function'] == 'block') && zoom >= 14)) {
            s_default['z-index'] = 10000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de:hp-light.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:main'] == 'hp' && tags['railway:signal:main:form'] == 'semaphore' && tags['railway:signal:main:function'] == 'exit') && zoom >= 17)) {
            s_default['z-index'] = 10000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de:hp-semaphore.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
        }

        if (((type == 'node' && tags['railway'] == 'signal' && tags['railway:signal:main'] == 'hp' && tags['railway:signal:main:form'] == 'light' && tags['railway:signal:main:function'] == 'exit') && zoom >= 17)) {
            s_default['z-index'] = 10000;
            s_default['text'] = MapCSS.e_localize(tags, 'ref');
            s_default['text-offset'] = 11;
            s_default['text-size'] = '12';
            s_default['text-color'] = 'black';
            s_default['text-halo-radius'] = 1;
            s_default['text-halo-color'] = 'white';
            s_default['font-weight'] = 'bold';
            s_default['icon-image'] = 'icons/de:hp-light.png';
            s_default['icon-width'] = '16';
            s_default['icon-height'] = '16';
        }

        if (Object.keys(s_default).length) {
            style['default'] = s_default; }
        return style;
    }
    
    var sprite_images = {
        'icons/de:hp-light.png': {
            width: 16, 
            height: 16, 
            offset: 0
        },
        'icons/de:hp-semaphore.png': {
            width: 16, 
            height: 16, 
            offset: 16
        }
    }, external_images = [], presence_tags = [], value_tags = ['ref', 'railway:signal:main', 'railway:signal:main:function', 'railway:signal:main:form', 'railway'];

    MapCSS.loadStyle('signals', restyle, sprite_images, external_images, presence_tags, value_tags);
    MapCSS.preloadExternalImages('signals');
})(MapCSS);
    