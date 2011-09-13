 
 $(document).ready(function() {
   menu_size = $("menu").css("width");
   menu_size = menu_size.substring(0,menu_size.length-2);
   submenu_size = menu_size / $("submenu").length;
   $("submenu").css("width", submenu_size/5*3 + "px");
   $("submenu").css("padding-left", submenu_size/5 + "px");
   $("submenu").css("padding-right", submenu_size/5 + "px");
 });