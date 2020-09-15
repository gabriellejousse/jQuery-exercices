$(document).ready(function(){

    // l'input est 'disabled' dans le html
    // pour réactiver l'input, on utilise la fonction .removeAttr()
    $('.btn').click(function(){
        $('input').removeAttr('disabled')
    })
})

// OK