describe('ReplaceWord', function() {
  it("replaces a single word", function() {
    expect(ReplaceWord("duck","duck", "chicken")).to.equal("chicken");
  });

  it("replaces a single word from a string of multiple words", function() {
    expect(ReplaceWord("where is the duck","duck", "chicken")).to.equal("chicken");
  });
});
