const champText = document.getElementById('champ_text')
const btnAjouter = document.getElementById('ajouter_tache')
const btnSupprimerDernier = document.getElementById('supprimer_dernier')
const btnSupprimerTous = document.getElementById('supprimer_tous')
const tachesList = document.getElementById('list')
const pasDeTache = document.getElementById('pas_de_taches')
let taches = []
const listTemplate = '<li style="font-size: 18px;" class="shadow list-group-item font-weight-normal p-4">{{tache}}</li>'

/**
 * Permet d'ajouter une tâche
 */
function ajouterTache() {
    btnAjouter.addEventListener('click', function () {
        if (champText.value.trim().length > 0){
            taches.unshift(champText.value.trim())
            champText.value = ''
            champText.dispatchEvent(new KeyboardEvent('keyup', {key: 'Backspace'}))
            listerTaches()
            suppressionActions()
        }

    })
}

/**
 * Supprime la dernière tâche
 */
function supprimerDernier() {
    btnSupprimerDernier.addEventListener('click', function () {
        taches.pop()
        listerTaches()
        suppressionActions()
    })
}

/**
 * supprime toutes les tâches
 */
function tousSupprimer() {
    btnSupprimerTous.addEventListener('click', function () {
        taches = []
        listerTaches()
        suppressionActions()
    })
}

/**
 * Liste l'ensemble des tâches
 */
function listerTaches() {
    tachesList.innerHTML = ''
    taches.forEach(function (tache) {
        tachesList.innerHTML += listTemplate.replace('{{tache}}', tache)
    })
    if (taches.length <= 0){
        tachesList.classList.add('d-none')
        pasDeTache.classList.remove('d-none')
    }else {
        tachesList.classList.remove('d-none')
        pasDeTache.classList.add('d-none')
    }
}

/**
 * Permet de desactiver le bouton d'ajout de tâche
 * si le champ texte est vide
 */
function peutAjouterUneTache() {
    champText.addEventListener('keyup', function () {
        if (champText.value.trim().length <= 0){
            btnAjouter.setAttribute('disabled', 'true')
        }else {
            btnAjouter.removeAttribute('disabled')
        }
    })
}

function suppressionActions() {
    if (taches.length <= 0){
        btnSupprimerDernier.setAttribute('disabled', 'true')
        btnSupprimerTous.setAttribute('disabled', 'true')
    }else {
        btnSupprimerDernier.removeAttribute('disabled')
        btnSupprimerTous.removeAttribute('disabled')
    }
}

/**
 * Fonction principale du programme
 */
function lancerProgramme() {
    peutAjouterUneTache()
    ajouterTache()
    tousSupprimer()
    supprimerDernier()
    suppressionActions()
}

/**
 * On lance le programme
 */
lancerProgramme()