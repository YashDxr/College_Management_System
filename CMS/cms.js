$('#menu-btn').click(function(){
    $('nav .navigation ul').addClass('active')
});
$('#menu-close').click(function(){
    $('nav .navigation ul').removeClass('active')
});

  var modal = document.getElementById('id01');

  window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
  }