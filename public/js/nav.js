$(document).ready(
	function()
	{
		// top navigation
		$(".fa-compass").click(
			function()
			{
				$(".fa-globe").removeClass("i");
				$(".fa-user").removeClass("i");
				$(".fa-compass").addClass("i");
			}
		);

		$(".fa-globe-africa").click(
			function()
			{
				$(".fa-compass").removeClass("i");
				$(".fa-user").removeClass("i");
				$(".fa-globe").addClass("i");
			}

		);

		$(".fa-user").click(
			function()
			{
				$(".fa-compass").removeClass("i");
				$(".fa-globe").removeClass("i");
				$(".fa-user").addClass("i");
			}
		);
		// end of top navigation

	}
);