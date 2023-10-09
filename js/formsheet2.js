$(document).ready(function(){

    $("form").submit(function(){
    
    if($ ('#name').val()==''){
        $('#warning').html("Enter a valid name !!")
        return false
        
    }

    else if($ ('#mail').val()==''){
        $('#warning1').html("Enter a valid mail !!")
        $('#warning').html("")
        return false
    }

    else if($ ('#pswd').val()==''){
        $('#warning2').html("Enter a password !!")
        $('#warning1').html("")
        $('#warning').html("")
        return false
    }
    

    else if($ ('#team').val()==''){
        $('#warning3').html("Select a valid option !!")
        $('#warning2').html("")
        $('#warning1').html("")
        $('#warning').html("")
        return false
    }

    else if($ ('#date2').val()==''){
        $('#warning4').html("Enter a valid date !!")
        $('#warning3').html("")
        $('#warning2').html("")
        $('#warning1').html("")
        $('#warning').html("")
        return false
    }

    else if($ ('#phn1').val()==''){
        $('#warning5').html("Enter a valid phone number !!")
        $('#warning4').html("")
        $('#warning3').html("")
        $('#warning2').html("")
        $('#warning1').html("")
        $('#warning').html("")
        return false
    }
    

    else{
        return true
    
    }
    });
    });
    