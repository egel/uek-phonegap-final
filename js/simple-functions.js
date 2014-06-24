function zapisz_ustawiania_aplikacji() {
    window.plugins.toast.show('Ustawienia zapisano pomyślnie', 'long', 'center', onSuccessSaveSettings, onErrorSaveSettings)
}

function onSuccessSaveSettings() {
    console.log('toast success: ' + a)
}

function onErrorSaveSettings() {
    alert('toast error: ' + b)
}
