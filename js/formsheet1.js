$(document).ready(function(){
   
    $("#button").click(function(){


        if($('#name').val()==''){

         
            $('#warning').html("Enter a valid name !!")

        }


        
        else if($ ('#mail').val()==''){
             $('#warning1').html("Enter a valid mail !!")
             $('#warning').html("")
        
        }


        else if($('#pswd').val()==''){
            $('#warning2').html("Enter a password !!")
            $('#warning1').html("")
            $('#warning').html("")
    
        }



        else if($('#team').val()==''){
            $('#warnini3').html("Select a valid option !!")
            $('#warning2').html("")
            $('#warning1').html("")
            $('#warning').html("")
    
        }



        else if($('#date2').val()==''){
            $('#warning4').html("Enter a valid date !!")
            $('#warning3').html("")
            $('#warning2').html("")
            $('#warning1').html("")
            $('#warning').html("")
        
        }




        else if($('#phn1').val()==''){
            $('#warning5').html(" Enter a valid phone number !!")
            $('#warning4').html("")
            $('#warning3').html("")
            $('#warning2').html("")
            $('#warning1').html("")
            $('#warning').html("")
        
        }

        else{
            $('#forms').submit();

    
        }

   
    });


});
    
    
    

    
