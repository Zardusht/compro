$(document).ready(function(){

    if(screen.width<=768){
        $('.checkbtn').click(function(){
        if($('#check').prop('checked')==false){
            $('.collapse').show();
        }
        if($('#check').prop('checked')==true){
            $('.collapse').hide();
            $('.ham').removeClass('active');
        }
        })
        $(".transition").click(function() {
            if ($(this).hasClass('link')) {
                $('.collapse').hide();  
                $('#check').prop('checked', false);
                $('.ham').removeClass('active');
            }
        }) 
    }
})
