$(document).ready(function(){
    $("#submit").on("click", function(){

        event.preventDefault();
        function validateInfo(){
            var valid = true
            $(".input").each(function (){
                if($(this).val().trim() === ""){
                    valid = false;
                }
            });
            return valid
        };
        if(validateInfo()){
            var contactInfo ={
        name: $('#name').val().trim(),
        email: $('#email').val().trim(),
        message: $('#message').val().trim()
            }
        $.post('/send', contactInfo, function(response){
            if (response){
                alert("Contact Info Sent")
            }
        })
        }
        else{
            alert("Please fill out all information befor submitting")
        }
        $("#contactForm")[0].reset();
    });
    $('.home').on('click', function(){
        window.location = '/'
    })
    $('.portfolio').on('click', function(){
        window.location = '/portfolio'
    })
    $('.contact').on('click', function(){
        window.location = '/contact'
    })
});