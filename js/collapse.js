jQuery(document).ready(function($)
{
  
  $("#author_bio_wrap_toggle").click(function()
  {
    
    $("#author_bio_wrap").slideToggle( "slow");
	//$(".circle-list").css({'width': '80%'});
    
	  if ($("#author_bio_wrap_toggle").text() == "Сховати інгрідієнти")
      {			
        $("#author_bio_wrap_toggle").html("Показати інгрідієнти")
      }
	  else 
      {		
        $("#author_bio_wrap_toggle").text("Сховати інгрідієнти")
      }
    
  });  
  
});