# WordPress 编辑器增加首行缩进功能
国内文章一般习惯段落首行缩进支持，2em是为官方富文本编辑器tinymce增加首行缩进支持，方便博主手动控制段落的首行缩进。  

Features:  
1. 编辑器增加缩进按钮，点击切换缩进；  
2. tab按键监听（tab增加，shift+tab缩减）；  

安装前请确认您自己的主题是否设置了文章"text-index:2em"，请先删除（一般在style.css中），然后按下面安装方式进行安装后，在文章编辑页面就可以手动控制段落缩进了。  
  
### 安装
1. 你可以在后台插件管理页面中直接搜索 `2em` 并安装  
2. 或者上传[iw-2em](https://github.com/itfsw/iw-2em/releases/download/v1.0.0/iw-2em.zip) 至 `/wp-content/plugins/` 目录  
3. 在插件管理页面中激活 2em  