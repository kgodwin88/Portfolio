$(document).ready(function(){
    $('.mail').on('click', () => {
        $('#contact').modal('show');
    })
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
                $("#header").text("Thank You");
                $("#errors").text("Contact Info Sent");
                $("#errorMessage").modal("show");
                
            }
        })
        }
        else{
            $("#header").text("Error");
            $("#message").text("Please fill out all information before submitting");
            $("#errorMessage").modal("show");
        }
        $("#contactForm")[0].reset();
        $('#contact').modal('hide')
    });
    $("#exit").on("click", function () {
        $("#errorMessage").modal("hide");
    });

});