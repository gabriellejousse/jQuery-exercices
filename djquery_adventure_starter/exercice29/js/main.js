$(document).ready(function(){

    $('.btn').click(function(){
        // on stocke la valeur de l'input dans une variable (le texte qui sera écrit dedans):
        var inputText = $('input').val()

        // si la valeur (le texte dans l'input) est supérieure à 5 caractères, ajouter la class 'is-valid' 
        if (inputText.length >= 5){
            // on doit lui demander avant de supprimer la classe is-invalid si elle est la (sinon il y a les deux classes qui s'accumulent)
            $('input').removeClass('is-invalid')
            // puis on ajoute la class 'is-valid' :
            $('input').addClass('is-valid')
            
        } else {
            // on doit lui demander avant de supprimer la classe is-valid si elle est la (sinon il y a les deux classes qui s'accumulent)
            $('input').removeClass('is-valid')
            // puis on ajoute la class 'is-invalid' :
            $('input').addClass('is-invalid')

        }
        
    })
})