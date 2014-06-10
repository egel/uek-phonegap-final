// Flashlight code

function flashlightToggle() {
    window.plugins.flashlight.available(onSuccess, onFail, false);

    if(lightstate)
    {
        window.plugins.toast.show("light off", 'short', 'center', false);
        lightstate = false;
    }
    else
    {
        window.plugins.toast.show("light on", 'short', 'center', false);
        lightstate = true;
    }
}

function onSuccess() {
    console.log("Success!");
}
function onSuccess() {
    console.log("Fail!");
}

var lightstate = false;
