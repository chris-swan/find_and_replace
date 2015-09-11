var wordToFind = function(userPhrase, oldWord, newWord) {

  var words = userPhrase.split(" ");
  var newWords = '';
  words.forEach(function(words) {
    if (words == oldWord) {
      var replacedWords = words.replace(oldWord, newWord)
      //newWords.push(newWord);
    } else{ oldWord + 'does not appear in your phrase'}
  });
  //var result = newWords.join(" ");
   return words;
}

$(document).ready(function() {
  $("form#wordToFind").submit(function(event) {
    var user_phrase = String($("input#userPhrase").val());
    var old_word = String($("input#oldWord").val());
    var new_word = String($("input#newWord").val());
    var result = wordToFind(user_phrase, old_word, new_word);

    $(".result").text(result);

    event.preventDefault();

  });
});
