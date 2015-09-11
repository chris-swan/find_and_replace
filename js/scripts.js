var wordToFind = function(userPhrase, oldWord, newWord) {

  var words = userPhrase.split(" ");
  var newWords = [];
  words.forEach(function(words) {
    if (words == oldWord) {
      var replacedWords = words.replace(oldWord, newWord)
      newWords.push(newWord);
    }
  });
  var result = newWords.join(" ");
  // return newWords.join(" ");
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
