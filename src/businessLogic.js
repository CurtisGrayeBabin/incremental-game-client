// currency formatting
// taken from https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
export const currencyFormatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});

const [scratcher2prob, scratcher1prob] = [0.3, 0.45];

// player bought a $1 scratcher
export const handleScratcherBuy = (totalObject, displayBuyResult) => {
  // need to have at least $1.00 to buy
  if (totalObject.bank >= 1) {
    totalObject.setBank((totalObject.bank -= 1));

    // check to see if the scracher won the player any money
    const randomValue = Math.random();
    if (randomValue < scratcher2prob) {
      totalObject.setBank((totalObject.bank += 2));
      displayBuyResult("good", "Your scratcher won you $2!");
    } else if (randomValue < scratcher1prob) {
      totalObject.setBank((totalObject.bank += 1));
      displayBuyResult("good", "Your scratcher won you $1!");
    } else {
      displayBuyResult("bad", "Oof, your scratcher wasn't a winner :(");
    }
  } else {
    displayBuyResult("bad", "You don't have enough money!");
  }
};
