describe('wordToFind', function() {
  it("replaces a single word", function() {
    expect(wordToFind("duck","duck", "chicken")).to.equal("chicken");
  });

  it("replaces a single word from a string of multiple words", function() {
    expect(wordToFind("where is the duck","duck", "chicken")).to.equal("chicken");
  });
});
