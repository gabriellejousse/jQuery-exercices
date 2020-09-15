$(document).ready(function(){

    $('.btn').click(function(){

        // on crée une variable pour pouvoir s'en servir dans le console.log
        // ici, la variable affiche la valeur de l'input (le text dans l'input)
        var textInput = $('input').val()
        console.log(textInput)
    })
})

// OK 