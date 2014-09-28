/*! Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.0.3
*
* Requires: jQuery 1.2.3+
*/
(function(a){a.preload=function(){var d=Object.prototype.toString.call(arguments[0])==="[object Array]"?arguments[0]:arguments;
var c=[];var b=d.length;for(;b--;){c.push(a("<img />").attr("src",d[b]));}};})(jQuery);