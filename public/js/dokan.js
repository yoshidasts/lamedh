var debug;
$(function(){
    // Add Menu event on header
    $('#menu').on('click', function(obj){
        if($('#menuList').css('display') == 'none'){
            $('#menuList').css('display', 'block');
        }else{
            $('#menuList').css('display', 'none');
        }
    });
    
    // Control Login/Logout button
    if($.cookie('aws.cognito.token')){
        $('header').attr('class', 'login');
        $('#menuList #mnLogin').css('display', 'none');
        $('#menuList #mnRegistry').css('display', 'none');
        $('#menuList #mnMypage').css('display', 'block');
        $('#menuList #mnLogout').css('display', 'block');
    }
    
    // Add Logout ajax
    $('#mnLogout').on('click', function(obj){
        $.ajax({
            type : 'post',
            url : '/test/logout',
            data : JSON.stringify($.cookie('aws.cognito.token')),
            contentType :'application/json',
            dataType: 'text/html',
            scriptCharset: 'utf-8',
            success : function(data) {
                if(data.responseText){
                    $('html').html(data.responseText);
                }else{
                    debug = data;
                }
            },
            error : function(data) {
                if(data.responseText){
                    $('html').html(data.responseText);
                }else{
                    debug = data;
                }
            }
        });
        return false;
    });
});
