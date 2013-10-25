jstimezone
==========

Guess user's timezone.


Usage
-----
Include jstimezone.js in your HTML document:

	<script src="jstimezone.js" type="text/javascript"></script>


To retrieve user's timezone just call:

	var timezone = JSTimezone.get();

	// timezone = {
	// 		offset : 60,		// Time offset from UTC in minutes
	//		dst    : true		// Is DST (daylight saving time) in effect?
	//}


TODO
----

- Include Timezone name.
- AMD module.