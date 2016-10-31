// ==UserScript==
// @name         [WorldWideTorrents.eu] Shoutbox User Info
// @namespace    PXgamer
// @version      0.1
// @description  Adds a hover-based info popup for users in the Shoutbox
// @author       PXgamer
// @include      *worldwidetorrents.eu/index.php
// @include      *worldwidetorrents.eu/
// @include      *worldwidetorrents.eu/shoutbox.php*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
	'use strict';
	var user_id = '';
	var info = null;
	$('body').append('<div class="info_popup" style="display: none; position: fixed; border-radius: 5px 0px 0px 0px; bottom: 0px; right: 0px; width: 200px; height: 100px; background: black; color: white; padding: 5px;"><div><b class="username" style="color: aqua;"></b></div><div><ul><li class="reputation"></li><li class="forumposts"></li><li class="comments"><li class="joindate"></li><li class="class"></li></ul></div></div>');
	$('a[data-userid]').hover(function() {
		user_id = $(this).data('userid');
		$.ajax({
			type: "GET",
			url: "/api/user/?id="+user_id,
			async: false,
			success: function (data) {
				info = data;
			},
			returnData: "json"
		});
		$('.info_popup div .username').text(info.username);
		$('.info_popup div .username').text(info.username);
		$('.info_popup div .reputation').text('Rep: ' + info.reputation);
		$('.info_popup div .joindate').text('Joined: ' + info.added);
		$('.info_popup div .forumposts').text('Forum Posts: ' + info.forum_posts);
		$('.info_popup div .comments').text('Comments: ' + info.comments);
		$('.info_popup div .class').text('Class: ' + info.class);
		$('.info_popup').show();
	}, function() {
		$('.info_popup').hide();
	});
})();
