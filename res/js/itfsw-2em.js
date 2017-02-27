/**
 * Created by HW on 2017/2/27.
 */
(function ($) {
    $(document).ready(function () {
        tinymce.create('tinymce.plugins.iw_2em', {
            init : function(editor, url) {
                editor.addButton('iw_2em', {//注意这一行有一个 youku
                    title: '2em',//图标文字说明
                    image: url + '/../images/iw-2em.png',
                    onclick : function() {
                        var node = editor.selection.getNode();
                        if (node.nodeName == 'P'){
                            // 判断是否已经添加样式
                            var style = editor.dom.getStyle(node, 'text-indent') == '' ? '2em' : '';
                            editor.dom.setStyle(node, 'text-indent', style);
                        };
                    }
                });
            }
        });
        tinymce.PluginManager.add('iw_2em', tinymce.plugins.iw_2em);//注意这里有两个 youku
    });
})(jQuery);