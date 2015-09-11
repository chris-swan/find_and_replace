var wordToFind = function(userPhrase, oldWord) {

  var words = userPhrase.split(" ");
  var newWord;
  var newWords = [];
  words.forEach(function(words) {
    //var wordStatic = word.slice();
    var replacedWords = words.replace(oldWord, newWord)
    // while (!isVowel(word[0])) {
    //   if (word.slice(0,2) === "qu") {
    //     word = word.slice(2) + word.slice(0,2);
    //   } else if (wordStatic[0] !== "y" && word[0] === "y"){
    //     break;
    //   } else {
    //     word = word.slice(1) + word[0];
    //   }
    // }
    newWords.push(newWord);
  });

  return newWords.join(" ");
}
//
// $(document).ready(function() {
//   $("form#pig_latin").submit(function(event) {
//     var user_input_form = String($("input#user_input").val());
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
