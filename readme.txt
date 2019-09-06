=== Plugin Name ===
Contributors: He Wei
Donate link: http://blog.itfsw.com
Tags: tinymce, 2em, style, text-indent, 首行缩进
Requires at least: 3.5.0
Tested up to: 5.2
Stable tag: 1.1.0
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl-3.0.html

首行缩进插件2em 主要是为官方编辑器增加首行缩进支持（text-indent:2em;）。

== Description ==

国内文章一般习惯段落首行缩进支持，2em是为官方富文本编辑器tinymce增加首行缩进支持，方便博主手动控制段落的首行缩进。

Features:
1. 经典编辑器（tinymce）支持
 1.1. 编辑器增加缩进按钮，点击切换缩进；
 1.2. tab按键监听（tab增加，shift+tab缩减）；
2. 新版编辑器（Gutenberg）支持，选中或新增段落块
 2.1. 右侧面板点击 区块=》式样=》首行缩进样式；
 2.2. 直接点击工具栏首行缩进按钮；

== Installation ==

1. 你可以在后台插件管理页面中直接搜索 `2em` 并安装
2. 或者上传 `iw-2em` 至 `/wp-content/plugins/` 目录
3. 在插件管理页面中激活 2em

== Changelog ==

= 1.0.0 =
* 2em 的第一个版本，增加官方tinymce编辑器增加首行缩进功能。

= 1.0.1 =
* 增加编辑器的tab按键监听，tab增加，shift+tab缩减。
* 对文章常用块元素增加支持（DIV,P,H1,H2,H3,H4,H5,H6）。

= 1.1.0 =
* 增加对官方新编辑器（Gutenberg）的支持。
* 对段落块增加首行缩进样式（选中段落后右侧面板区块=》式样=》首行缩进），或者在段落块的操作栏上点击首行缩进按钮。