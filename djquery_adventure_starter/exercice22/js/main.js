$(document).ready(function(){

    // agrandir la taille de 'text' (fluide) après avoir cliqué sur 'btn'
    $('.btn').click(function(){

        $('#text').animate({
            fontSize : '50px'
        })
    })
})

// OK