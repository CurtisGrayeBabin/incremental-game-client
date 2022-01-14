// feedbacks for each kind of inventory buy
import { scratcher_bad, scratcher_good } from "./feedbacks";
import { currencyFormatter } from "../businessLogic";

const setFeedback = (displayBuyResult, goodOrBad, feedbackArray, amount) => {
  displayBuyResult(
    goodOrBad,
    feedbackArray[Math.floor(Math.random() * feedbackArray.length)],
    " (" + currencyFormatter.format(amount).toString() + ")"
  );
};
// scratcher2prob is the line the player wins $2
// scratcher1prob is the line the player wins $1
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
      setFeedback(displayBuyResult, "good", scratcher_good, 2);
    } else if (randomValue < scratcher1prob) {
      totalObject.setBank((totalObject.bank += 1));
      setFeedback(displayBuyResult, "good", scratcher_good, 1);
    } else {
      setFeedback(displayBuyResult, "bad", scratcher_bad, -1);
    }
  } else {
    displayBuyResult("bad", "You don't have enough money!", "");
  }
};

// each item is represented as an object
const inventoryItems = [
  { name: "Scratcher", price: 1, function: handleScratcherBuy },
];

export default inventoryItems;
