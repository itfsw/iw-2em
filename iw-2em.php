<?php
/*
Plugin Name: 2em
Plugin URI: https://wordpress.org/plugins/2em/
Description: add "text-indent:2em" support to editor.
Version: 1.0.1
Author: hewei
Author URI: http://blog.itfsw.com
License: GPL2+
*/

/*
    Copyright Automattic and many other contributors.

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
*/

if (is_admin()){

	/**
	 * add plugin
	 *
	 * @param $plugin_array
	 *
	 * @return mixed
	 */
	function iw_add_plugin($plugin_array) {
		$plugin_array['iw_2em'] = plugins_url('res/js/iw-2em.js', __FILE__);
		return $plugin_array;
	}
	add_filter('mce_external_plugins', 'iw_add_plugin');

	/**
	 * register buttons
	 *
	 * @param $buttons
	 *
	 * @return mixed
	 */
	function iw_register_buttons($buttons) {
		array_push($buttons, 'separator', 'iw_2em');
		return $buttons;
	}
	add_filter('mce_buttons', 'iw_register_buttons');
}