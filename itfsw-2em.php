<?php
/* Plugin Name: itfsw 2em
 * Description: add a button to editor, can support style 'text-index:2em' to post.
 * Author: Hewei
 * Version: 1.0.0
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
		$plugin_array['iw_2em'] = plugins_url('res/js/itfsw-2em.js', __FILE__);
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