describe('wordToFind', function() {
  it("replaces a single word", function() {
    expect(wordToFind("duck","duck", "chicken")).to.equal("chicken");
  });

  it("replaces a single word from a string of multiple words", function() {
    expect(wordToFind("where is the duck","where", "here")).to.equal("here is the duck");
  });

  it("replaces multiple words from the phrase", function() {
    expect(wordToFind("where is the duck in the morning","in the morning", "eating breakfast")).to.equal("where is the duck eating breakfast");
  });

  it("replaces multiple words from the phrase, regardless of case settings", function() {
    expect(wordToFind("Where Is THE duck in The MOrning","in the morning", "eating breakfast")).to.equal("where is the duck eating breakfast");
  });
});
