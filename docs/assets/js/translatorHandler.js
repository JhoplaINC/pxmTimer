const frases = {
    "en": {
        "Temporizador PokeXMortal": "PokeXMortal Timer",
        "23 Febrero 2023<br />Apertura PokeXMortal": "February 23 2023<br />PokeXMortal Opening",
        "Desarrollado Por: JhoplaINC": "Developed By: JhoplaINC",
        "Español": "Spanish",
        "Inglés": "English",
        "Seleccionar Idioma": "Select Language"
    }
};

/**
 * Función que cambia todos los elementos al nuevo idioma.
 *
 * @param {string} lang
 */
function cambiarIdioma(lang) {
    // Habilita las 2 siguientes para guardar la preferencia.
    lang = lang || sessionStorage.getItem('app-lang') || 'es';
    sessionStorage.setItem('app-lang', lang);

    var elems = document.querySelectorAll('[data-tr]');
    for (var x = 0; x < elems.length; x++) {
        elems[x].innerHTML = frases.hasOwnProperty(lang)
        ? frases[lang][elems[x].dataset.tr]
        : elems[x].dataset.tr;
    }
}

window.onload = function(){
    cambiarIdioma();

    document
      .getElementById('idioma_es')
      .addEventListener('click', cambiarIdioma.bind(null, 'es'));


    document
      .getElementById('idioma_en')
      .addEventListener('click', cambiarIdioma.bind(null, 'en'));

}