$('#NavOpen').click(function(){
    $( this ).toggleClass("nav_icon_close");
    $( ".nav_menu" ).toggle( "slow");
});


let array = ['info.webovio@gmail.com','webovio@gmail.com','info.webovio@mail.com','webovio@mail.com']
$('.info_mail').text(array[0]);

$(".span").click(function (){
    let span = $(".span");
    for(let i = 0; i < span.length; i++){
        span[i].style.backgroundColor = '#444A34';
    }
    $(this).css('backgroundColor', '#FFD723');
    let arrayIndex = $(this).index();
    $('.info_mail').text(array[`${arrayIndex}`]);
});

