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
        window.plugins.toast.show('Ustawienia zapisano pomyślnie', 'short', 'center', onSuccessSaveSettings, onErrorSaveSettings);
    }
    else
    {
        console.log("Brak wszystkich wymaganych danych");
        window.plugins.toast.show('Błąd zapisu', 'short', 'center', onSuccessSaveSettings, onErrorSaveSettings);
    }
}

function onSuccessSaveSettings() {
    console.log('toast success: ' + a)
}

function onErrorSaveSettings() {
    alert('toast error: ' + b)
}
