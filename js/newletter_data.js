  $(document).ready(function(){
    $('.submitButton').click(function(e){
      e.preventDefault();
          if($('#news_email').val() == "" )  
           {
                $('#news_email').focus();
              swal({
                      title:  '<b>NEWS LETTER</b>',
                      type:   'info',
                      html:   '<b>EMAIL ADDRESS IS REQUIRED.</b>',
                      showCloseButton: false,
                      showConfirmButton: true,
                      backdrop: true,
                      animation: true,
                      customClass: 'animated zoomIn'
                    }) 
                return false;   
           }
           else
           {
              var news_email = $("#news_email").val();
              //alert("yes");
              $.ajax({  
                url:"contain/newsletter.php",  
                method:"POST",  
                data:{news_email:news_email},
                beforeSend:function()
                {
                  $("#submitButton").html("<b>PLEASE WAIT....</b>");
                }, 
                success:function(data)
                {  
                      //console.log(data);
                      $("#success_message3").fadeIn().html(data);
                      $("#submitButton").html("<b>Subscribe</b>");
                      setTimeout(function() {
                        $('#success_message3').fadeOut("slow");
                      }, 10000 );
                }  
           });

           }

    });
  });