// Copyright 2006-2007 javascript-array.com

var timeout = 500;
var closetimer  = 0;
var ddmenuitem  = 0;

// open hidden layer
function menu_open(id)
{   
    // cancel close timer
    menu_cancel_close_time();

    // close old layer
    if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

    // get new layer and show it
    ddmenuitem = document.getElementById(id);
    ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function menu_close()
{
    if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function menu_close_time()
{
    closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function menu_cancel_close_time()
{
    if(closetimer)
    {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}

// close layer when click-out
document.onclick = menu_close; 