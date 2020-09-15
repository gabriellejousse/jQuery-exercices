function displayText(){
    $('#text').css('display', 'block');
}



$(document).ready(function(){

    $('.btn').click(function(){
        //j'appelle ma fonction que j'ai créé au-dessus :
        displayText()
    })

})

// OK