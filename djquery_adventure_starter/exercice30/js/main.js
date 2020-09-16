$(document).ready(function () {

    $('input').keyUp(function(){

        var inputText = $('input').val();
        
        if (inputText.length > 5){
            $('input').removeClass('is-invalid')
            $('input').addClass('is-valid')
        } else {
            $('input').removeClass('is-valid')
            $('input').addClass('is-invalid')
        }
    })

})