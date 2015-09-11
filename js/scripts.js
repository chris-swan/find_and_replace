var ReplaceWord = function(userPhrase, oldWord, newWord) {

var replacedWords = userPhrase.replace(oldWord, newWord);
return replacedWords;

};

$(document).ready(function() {
  $("form#ReplaceWord").submit(function(event) {
    var user_phrase = String($("input#userPhrase").val());
    var old_word = String($("input#oldWord").val());
    var new_word = String($("input#newWord").val());
    var result = ReplaceWord(user_phrase, old_word, new_word);

    $(".result").text(result);

    event.preventDefault();

  });
});
