/**
 * Created by HW on 2017/2/27.
 */
(function ($) {
    $(document).ready(function () {
        /**
         * 增加text-index
         *
         * @param editor 编辑器
         * @param plus 1:累加、0：切换、-1：累减
         * @author hewei
         */
        function addTextIndent(editor, plus) {
            var node = editor.selection.getNode();
            var nodeName = node.nodeName;
            if (nodeName == 'P' || nodeName == 'DIV' ||
                nodeName == 'H1' || nodeName == 'H2' || nodeName == 'H3' || nodeName == 'H4' || nodeName == 'H5' || nodeName == 'H6'
            ){
                var indent = parseInt(editor.dom.getStyle(node, 'text-indent'));
                // 修正2的倍数
                indent = isNaN(indent) ? 0 : parseInt(indent/2) * 2;
                // 缩进处理
                if (plus == 1){
                    // 累加
                    indent += 2;
                } else if (plus == -1){
                    // 累减
                    indent -= 2;
                } else {
                    indent = indent - 2 < 0 ? 2 : indent - 2;
                }
                // 判断是否已经添加样式
                var style = indent <= 0 ? '' : indent + 'em';
                editor.dom.setStyle(node, 'text-indent', style);
            };
        }

        /**
         * tab处理
         *
         * @param e
         * @param editor 编辑器
         * @author hewei
         */
        function tabHandler(e, editor) {
            if (e.keyCode === 9 && !e.ctrlKey && !e.altKey && !e.metaKey) {
                addTextIndent(editor, e.shiftKey ? -1 : 1);
                // 阻止事件传递
                e.preventDefault();
            }
        }

        // 创建插件
        tinymce.create('tinymce.plugins.iw_2em', {
            init : function(editor, url) {
                // 增加按钮
                editor.addButton('iw_2em', {
                    title: '2em',
                    image: url + '/../images/iw-2em.png',
                    onclick : function() {
                        addTextIndent(editor, 0);
                    }
                });
                // 绑定tab事件
                if (tinymce.Env.gecko) {
                    editor.on('keypress keydown', function (e) {
                        tabHandler(e, editor);
                    });
                } else {
                    editor.on('keydown', function (e) {
                        tabHandler(e, editor);
                    });
                }
            }
        });
        tinymce.PluginManager.add('iw_2em', tinymce.plugins.iw_2em);
    });
})(jQuery);