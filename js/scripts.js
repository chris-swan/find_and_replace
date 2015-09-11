
//Use replace 
var ReplaceWord = function(userPhrase, oldWord, newWord) {
  var newPhrase = userPhrase.replace(oldWord, newWord);
  return newPhrase;
};

$(document).ready(function() {
  $("form#ReplaceWord").submit(function(event) {

    //user variables from from:
    var user_phrase = String($("input#userPhrase").val());
    var old_word = String($("input#oldWord").val());
    var new_word = String($("input#newWord").val());

    //new display
    var result = ReplaceWord(userPhrase, oldWord, newWord);

    //Show results:
    $("#result").text(result);
    event.preventDefault();

  });
});
