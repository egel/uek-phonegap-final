function flashlightToggle()
{
    //window.plugins.flashlight.switchOn(success,fail,false);
    window.plugins.flashlight.toggle(success,fail,false);
    //window.plugins.toast.show('flashlight toggled','short','center',false);
    if(lightstate)
    {
        window.plugins.toast.show('Latarka wyłączona','short','center',false);
        lightstate = false;
    }else
    {
        window.plugins.toast.show('Latarka włączona','short','center',false);
        lightstate = true;
    }
}
function success()
{
    console.log("Success");
}
function fail()
{
    console.log("Fail");
}
var lightstate = false;
