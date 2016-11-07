var submenuHeader = $('nav .list-submenu-header');
var listSubmenu = $('nav .list-submenu');
var hamburger = $('#hamburger');
var main = $('main');

submenuHeader.click(function(){
    // submenuHeader.preventDefault();
    listSubmenu.css("display", "block");
});
main.on('click', function(){
    listSubmenu.css("display", "none");
});