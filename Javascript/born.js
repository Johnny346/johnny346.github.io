var BRN = {};

BRN.Common =
{
	main_transition_time : 250,
	current_breakpoint : "desktop",

	init: function()
	{
		var _this = this;

		BRN.Navigation.init();
		_this.backgroundOverlay.init();

		/*
		*	Initialize the breakpontHandler and loadingOverlay here as well
		*/
		_this.breakpointHandler.init();
		_this.loadingOverlay.init();
	},

	backgroundOverlay :
	{
		/*
		*	The init method is to add some basic handlers that make sure the overlay hides if the user hover over it
		*		- any popup or navigation structures should also be reset upon this action
		*/

		init: function()
		{
			 $("#hov").hover(function(){
			 		$(".background-overlay").fadeIn();
				},
				function(){
					$(".background-overlay").fadeOut();
				});

		},

		/*
		*	Complete the functions below to make the object .background-overlay fade In or Out.
		*		- the _force variable is to be used to toggle the .force class on the overlay
		*/

		show: function( _force )
		{
			$(".background-overlay").fadeIn();
			$("span.loading-overlay").toggleClass(".force");
		},

		hide: function()
		{
			$("span.loading-overlay").removeClass(".force");
		}
	},

	loadingOverlay :
	{
		obj : null,
		processing_timeout_delay : 500,

		init : function()
		{
			var _this = this;

			_this.obj = $(".loading-overlay");
			_this.obj.hide();

			$("form").on("submit", function ( _e )
			{
				if ( $(this).valid() )
				{
					_this.show();
				}
			});

			$(document).ajaxSend( function ( _e )
			{
				_this.show();
			});

			$(document).ajaxComplete( function ( _e )
			{
				_this.hide();
			});
		},

		/*
		*	Compelte the functions bellow to make the reference object fade In or Out along with the background overlay
		*/

		show : function()
		{

			$(".background-overlay").fadeIn();
			$(".loading-overlay").show();

		},

		hide : function()
		{
			_this.obj.hide();

		}
	},

	breakpointHandler:
	{

		breakpoints :
		{
			mobile : 960
		},

		init : function()
		{
			var _this = this;

			$(window).on("resize", function()
			{
				_this.updateBreakpoint();
			});

			_this.updateBreakpoint();
		},

		updateBreakpoint : function()
		{
			var _this = this;

			var width = $(window).width();

			if ( width < _this.breakpoints.mobile )
			{
				BRN.Common.current_breakpoint = "mobile";
			}
			else
			{
				BRN.Common.current_breakpoint = "desktop";
			}
		}
	}
}

/*
*	The ul.Lc object should be hidden on mobile and visible on desktop by default, the object is located inside of the #hov container
*/

BRN.Navigation =
{
	init : function()
	{
		var _this = this;

		$( "#hov > li" ).hoverIntent(
		{
			over : function( _e )
			{
				if ( BRN.Common.current_breakpoint == "desktop" )
				{
					$("#hov > li a.active").removeClass("active");
					$("body").addClass('nav-hover');

					// Create a slide down animation for the ul container here
					$(this).children('ul').stop().slideToggle();

					$(this).find("a").addClass("active");
					BRN.Common.backgroundOverlay.show();
				}
			},

			out : function( _e )
			{
				if ( BRN.Common.current_breakpoint == "desktop" )
				{
					$("body").removeClass('nav-hover');

					// Create a fade out animation for the ul container here
					$(this).children('ul').stop(true, false, true).slideToggle();

					if ( $(_e.toElement).attr("id") == "hov" )
					{
						BRN.Common.backgroundOverlay.hide();
					}
				}
			},

			interval : 200
		});

		$( "#hov > li a" ).on("click", function(_e)
		{
			if ( ! $(this).hasClass("active") && ! $(this).parent().hasClass("Lc") )
			{
				_e.preventDefault();
				return false;
			}
		});

		$('button[data-toggle="offcanvas"]').on("click", function()
		{
			$('.row-offcanvas').toggleClass('active');

			if ( $('.row-offcanvas').hasClass("active") )
			{
				BRN.Common.backgroundOverlay.show();
			}
			else
			{
				BRN.Common.backgroundOverlay.hide();
			}
		});

		$("#hov li.La > a").on("click", function( _e )
		{
			if ( BRN.Common.current_breakpoint == "mobile" )
			{
				if ( ! $(this).hasClass("active") )
				{
					_e.preventDefault();

					$(this).prev(".fa").removeClass("fa-plus").addClass("fa-minus");
					$("#hov li.La a.active").prev(".fa").removeClass("fa-minus").next().addClass("fa-plus");
					$("#hov li.La a.active").removeClass("active");
					$(this).addClass("active");
					$(this).next("ul.Lb").slideDown();

					return false;
				}
			}
		});

		$("#hov li.La > .fa").on("click", function( _e )
		{
			if ( BRN.Common.current_breakpoint == "mobile" )
			{
				if ( ! $(this).next("a").hasClass("active") )
				{
					$("#hov li.La a.active").prev(".fa").removeClass("fa-minus").addClass("fa-plus");

					$("#hov li.La a.active").removeClass("active").next("ul.Lb").slideUp();
					$(this).removeClass("fa-plus").addClass("fa-minus");
					// fixes dropdown menu on mobile
					$(this).next("a").addClass("active").next("ul.Lb").slideDown();
					$('.Lb.nav-content').animate( {height: '100%'}, 'slow', function(e) {}).stop();


				}
				else
				{
					$("#hov li.La a.active").prev(".fa").removeClass("fa-minus").addClass("fa-plus");

					$("#hov li.La a.active").removeClass("active").next("ul.Lb").slideUp();
				}
			}
		});

		$("#hov li.Lb > h4").on("click", function( _e )
		{
			if ( BRN.Common.current_breakpoint == "mobile" )
			{
				if ( ! $(this).hasClass("active") )
				{
					$("#hov li.Lb h4.active").find(".fa").removeClass("fa-caret-down").addClass("fa-caret-right");
					$("#hov li.Lb h4.active").removeClass("active").next("ul.Lc").slideUp();
					$(this).find(".fa").removeClass("fa-caret-right").addClass("fa-caret-down");
					$(this).addClass("active");
					$(this).next("ul.Lc").slideDown();
				}
				else
				{
					$("#hov li.Lb h4.active").find(".fa").removeClass("fa-caret-down").addClass("fa-caret-right");
					$("#hov li.Lb h4.active").removeClass("active").next("ul.Lc").slideUp();
				}
			}
		});

		$(window).on("resize", function()
		{
			_this.reload();
		});

		_this.reload();
	},

	reload : function()
	{
		$("#hov li.Lb h4.active").find(".fa").removeClass("fa-caret-down").addClass("fa-caret-right");
		$("#hov li.Lb h4.active").removeClass("active").next("ul.Lc").slideUp();
		$("#hov li.La a.active").prev(".fa").removeClass("fa-minus").addClass("fa-plus");
		$("#hov li.La a.active").removeClass("active").next("ul.Lb").slideUp();
	}
}

$(document).ready(function()
{
	BRN.Common.init();
});