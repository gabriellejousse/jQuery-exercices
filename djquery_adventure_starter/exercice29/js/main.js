$(document).ready(function(){

    $('.btn').click(function(){

        // si la valeur (le texte dans l'input) est supérieure à 5 caractères, ajouter la class 'is-valid' 
        if ($('input').val().length > 5){
            $('input').addClass('is-valid')
        } else {
            $('input').addClass('is-invalid')

        }
        
    })
})

// OK