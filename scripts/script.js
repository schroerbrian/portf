window.onload = function() {

  var contact = document.getElementById("contact");
  var email = $(".ic-email");

  contact.onclick = function(e) {
    e.preventDefault();
    
    $("html, body").animate({ 
      scrollTop: $(document).height()-$(window).height() 
    }, 1000);

    // setTimeout(function(){
      
    //   email.css("background-position", "0 0");

    // }, 
    //   1200);

  }

}