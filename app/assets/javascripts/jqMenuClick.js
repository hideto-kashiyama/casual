/*
* jqMenuClick: Jquery plugin for switching data icons attached to navigation's click event
*
* latest version and complete README available on Github:
* https://github.com/jayeshmagare/jqMenuClick
*
* Copyright 2013 Jayesh Magare (jayesh.magare@gmail.com)
* Please file issues on Github : https://github.com/jayeshmagare/jqMenuClick/issues
* Licensed under the MIT license.
*/

(function ($) {
    $.fn.menuClick = function (options) {
		
        var options = $.extend({}, $.fn.menuClick.config, options);
		
		/* check that the passed element is actually in the DOM */
		if ($(this).length == 0) {
			if (window.console && window.console.log) {
				window.console.log('Element does not exist in DOM!');
			}
			else {
				alert('Element does not exist in DOM!');		
			}
			return false;
		}
		
		/* ID of the identifier */
		var menuId = '#' + $(this).attr('id');
		
        return this.each(function () {

			var settings = {				
				menuExpanded:false
			};
			
			/* Next button click button handler */
			$(menuId).click(function() {
				switchIcon();
			});
			
			function switchIcon()
			{
				var spanTag = $(menuId).find('span');
					
				if(!settings.menuExpanded)
				{
					spanTag.removeClass(options.menuCollapseClass);
					spanTag.addClass(options.menuExpandedClass);
					settings.menuExpanded = true;
				}
				else
				{
					spanTag.removeClass(options.menuExpandedClass);
					spanTag.addClass(options.menuCollapseClass);
					settings.menuExpanded = false;
				}
			}
			
        });
    };

    $.fn.menuClick.config = {
        // set values and custom functions
		menuExpandedClass:"fa-main-nav-up",
		menuCollapseClass:"fa-main-nav-down",
    };

}(jQuery));