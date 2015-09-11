var wordToFind = function(userPhrase, oldWord, newWord) {


  //Make phrase lower case:
  var lowerCasePhrase = userPhrase.toLowerCase();

  //function to replace old words in phrase with new, while also making lower case to ensure all words are caught:
  var result = lowerCasePhrase.replace(oldWord.toLowerCase(), newWord.toLowerCase());
  return result;
}

$(document).ready(function() {
  $("form#wordToFind").submit(function(event) {
    var user_phrase_form = String($("input#userPhrase").val());
    var user_old_word_form = String($("input#oldWord").val());
    var user_new_word_form = String($("input#newWord").val());
    var result = wordToFind(user_phrase_form, user_old_word_form, user_new_word_form);

    $(".result").text(result);

    event.preventDefault();

  });
});
