var expect = chai.expect;

//function shuffleCards() {
    
    //for (let i = shuffledDeck.length - 1; i > 0; i--) {
      //const k = Math.floor(Math.random() * (i + 1)); 
      //const temp = shuffledDeck[i];
      //shuffledDeck[i] = shuffledDeck[k];
      //shuffledDeck[k] = temp;
    //}
  //}
  //shuffleCards();

describe('War Card Game', function(){
    describe('#shuffleCards', function(){
        it('should randomly shuffle a deck of cards', function(){
            var i = shuffleCards(shuffledDeck);
            expect(i).to.equal(shuffledDeck);
        });

        it('should throw an error if a deck of cards is not being shuffled', function(){
            expect(function(){
                doSomething(shuffleCards);
            }).to.throw(Error);
        });
    });
}); //When I run the test, it fails because shuffleCards is not defined in line 17, I've tried to define it only for the test to not run at all.
    //I inserted the function to try to define shuffleCards that way, but it also did not work.  When I have the code written like this for the 
    //test, it's the only way I can get any result at all.  Every thing else I try results in nothing showing up on the test html page.
    //I know the shuffleCards function works because my code works as it should, just can't quite figure out how this test needs to be laid out.