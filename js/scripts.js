var wordToFind = function(userPhrase, oldWord, newWord) {

  var words = userPhrase.split(" ");
  var newWords = [];
  words.forEach(function(words) {
    if (words == oldWord){
      var replacedWords = words.replace(oldWord, newWord)
      newWords.push(newWord);
    }
  });

  return newWords.join(" ");
}
//
// $(document).ready(function() {
//   $("form#find_and_replace").submit(function(event) {
//     var user_input_form = String($("input#user_phrase").val());
//     var result = findWord(user_input_form);
//
//     $(".result").text(result);
//
//     event.preventDefault();
//
//   });
// });


// var words = userInput.split(" ");
// var ReplacedWords = [];
// words.forEach(function(word) {
//   var wordStatic = word.slice();
//   for each word in words
//     if
//     } else {
//       word = word.slice(1) + word[0];
//     }
//   }
//   translatedWords.push(newWord);
// });
//
// return ReplacedWords.join(" ");
