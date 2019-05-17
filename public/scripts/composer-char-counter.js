$(document).ready(function() {
  $('textarea').on("input", function(){
    var currentLength = $(this).val().length;
    var charactersRemaining = 140 - currentLength;
    var counter = $(this).siblings(".counter");
    if(charactersRemaining <= 0){
      counter.text(charactersRemaining).css("color", "red");
    }else{
      counter.text(charactersRemaining).css("color", "black");
    }
  });
})




