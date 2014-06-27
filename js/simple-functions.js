function aktualizuj_ustawienia() {

    console.log("aktualizuj_ustawienia!");

    var fullname = window.localStorage.getItem("owner-name");
    var email = window.localStorage.getItem("owner-email");
    var album = window.localStorage.getItem("owner-album-id");

    //setting
    if(fullname) {
        document.getElementById('owner-name').innerHTML = window.localStorage.getItem("owner-name");
    } else {
        window.localStorage.setItem("owner-name", "undefined");
    }

    if(email) {
        document.getElementById('owner-email').innerHTML = window.localStorage.getItem("owner-email");
    } else {
        window.localStorage.setItem("owner-email", "undefined");
    }

    if(album) {
        document.getElementById('owner-album-id').innerHTML = window.localStorage.getItem("owner-album-id");
    } else {
        window.localStorage.setItem("owner-album-id", "undefined");
    }

    //settings for popup change
    document.getElementById('owner-app-fullname').value = window.localStorage.getItem("owner-name");
    document.getElementById('owner-app-album-id').value = window.localStorage.getItem("owner-album-id");
    document.getElementById('owner-app-email').value = window.localStorage.getItem("owner-email");
}


function zapisz_ustawiania_aplikacji() {

    var fullname = document.getElementById('owner-app-fullname').value;
    var email = document.getElementById('owner-app-email').value;
    var album = document.getElementById('owner-app-album-id').value;

    //console.log(fullname, email, album)

    if(fullname && email && album)
    {
        window.localStorage.setItem("owner-name", fullname);
        window.localStorage.setItem("owner-email", email);
        window.localStorage.setItem("owner-album-id", album);
        console.log("zapisano poprawnie");
        aktualizuj_ustawienia();
        window.plugins.toast.show('Ustawienia zapisano pomyślnie', 'short', 'center', onSuccessSaveSettings, onErrorSaveSettings);
        window.location = "index.html#page_settings";
    }
    else
    {
        console.log("Brak wszystkich wymaganych danych");
        window.plugins.toast.show('Brak wszystkich wymaganych danych', 'short', 'center', onSuccessSaveSettings, onErrorSaveSettings);
    }
}


// ustawienia specjalnie dla konfiguracji startowej aplikacji i tylko dla niej.
function zapisz_ustawiania_startowe_aplikacji() {
    var fullname = document.getElementById('start-owner-fullname').value;
    var email = document.getElementById('start-owner-email').value;
    var album = document.getElementById('start-owner-album-id').value;

    //console.log(fullname, email, album)

    if(fullname && email && album)
    {
        window.localStorage.setItem("owner-name", fullname);
        window.localStorage.setItem("owner-email", email);
        window.localStorage.setItem("owner-album-id", album);
        console.log("zapisano poprawnie");
        aktualizuj_ustawienia();

        window.plugins.toast.show('Ustawienia zapisano pomyślnie', 'short', 'center', onSuccessSaveSettings, onErrorSaveSettings);
        window.location = "index.html#page_main";
    }
    else
    {
        console.log("Brak wszystkich wymaganych danych");
        window.plugins.toast.show('Brak wszystkich wymaganych danych', 'short', 'center', onSuccessSaveSettings, onErrorSaveSettings);
    }
}


function prepare_email() {

    var fullname = window.localStorage.getItem("owner-name", fullname);
    var email = window.localStorage.getItem("owner-email", email);
    var album = window.localStorage.getItem("owner-album-id", album);

    window.location.href = "mailto:uasa@uek.krakow.pl?subject=Pytanie dotyczące systemu Antyplagiat | " + fullname + " nr.alb." + album;
}


function open_plagiat_page() {
    navigator.network.isReachable("plagiat.pl", reachableCallback, {});
}


// Check network status
//
function reachableCallback(reachability) {
    // There is no consistency on the format of reachability
    var networkState = reachability.code || reachability;

    var states = {};
    states[NetworkStatus.NOT_REACHABLE]                      = 'Brak połączenia z siecią Internet';
    states[NetworkStatus.REACHABLE_VIA_CARRIER_DATA_NETWORK] = 'Carrier data connection';
    states[NetworkStatus.REACHABLE_VIA_WIFI_NETWORK]         = 'Połączenie WiFi';

    if(networkState != 0) {
        window.open('http://www.plagiat.pl', '_system');
    }
    else
    {
        window.plugins.toast.show('Connection type: ' + states[networkState], 'short', 'center', onSuccessSaveSettings, onErrorSaveSettings);
    }

}



function onSuccessSaveSettings() {
    console.log('toast success: ' + a)
}

function onErrorSaveSettings() {
    alert('toast error: ' + b)
}
