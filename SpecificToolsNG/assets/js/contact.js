/*------------------------------------------
 Contact form
 ------------------------------------------*/

$(document).ready(function () {

    $("#contactform").submit(function(e){

        e.preventDefault();
        var $ = jQuery;

        var postData 		= $(this).serializeArray(),
            formURL 		= $(this).attr("action"),
            $cfResponse 	= $('#action_message'),
            $cfsubmit 		= $("#submit"),
            cfsubmitText 	= $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data)
                {
                    $cfResponse.html(data);
                    $cfsubmit.text(cfsubmitText);
                    $("#contactform")[0].reset();
                },
                error: function(data)
                {
                    alert("Error occurd! Please try again");
                    $cfsubmit.text(cfsubmitText);
                }
            });

        return false;

    });



});



/*------------------------------------------
 Appointment form
 ------------------------------------------*/


$(document).ready(function () {

    $("#appointment_form").submit(function(e){

        e.preventDefault();
        var $ = jQuery;

        var postData        = $(this).serializeArray(),
            formURL         = $(this).attr("action"),
            $cfResponse     = $('#AppointmentFormResponse'),
            $afsubmit       = $("#afsubmit"),
            afsubmitText    = $afsubmit.text();

        $afsubmit.text("Sending...");


        $.ajax(
            {
                url : formURL,
                type: "POST",
                data : postData,
                success:function(data)
                {
                    $cfResponse.html(data);
                    $afsubmit.text(afsubmitText);
                    $("#appointment_form")[0].reset();
                },
                error: function(data)
                {
                    alert("Error occurd! Please try again");
                    $afsubmit.text(afsubmitText);
                }
            });
        return true;

    });


});


/*-------------------------------------------------
Dropdown Menu On Hover
--------------------------------------------------*/

