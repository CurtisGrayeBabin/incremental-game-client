/*
This file contains an inventory of items
and their individual functions that handle interacting with the store
*/

// feedbacks for each kind of inventory buy
import { scratcherBad, scratcherGood } from "./feedbacks";
import { friesGood } from "./feedbacks";
import { icedAmericanoGood } from "./feedbacks";
import { tacoGood } from "./feedbacks";
import { dadShoesGood } from "./feedbacks";
import { currencyFormatter } from "../businessLogic";

// geralized format for setting grren or red buy result messages
const setFeedback = (displayBuyResult, goodOrBad, feedbackArray, amount) => {
  if (amount) {
    displayBuyResult(
      goodOrBad,
      feedbackArray[Math.floor(Math.random() * feedbackArray.length)],
      " (" + currencyFormatter.format(amount).toString() + ")"
    );
  } else {
    displayBuyResult(
      goodOrBad,
      feedbackArray[Math.floor(Math.random() * feedbackArray.length)]
    );
  }
};

// Player doesn't have enough money to buy something
const handleNotEnoughMoney = (displayBuyResult) => {
  displayBuyResult("bad", "You don't have enough money!", "");
};

// Prices of inventory
const scratcherPrice = 1;
const frenchFriesPrice = 2;
const icedAmericanoPrice = 3.5;
const tacoPrice = 3;
const dadShoesPrice = 299.99;

// OVERPRICED DAD SHOES
export const handleDadShoesBuy = (totalObject, displayBuyResult) => {
  if (totalObject.bank >= dadShoesPrice) {
    totalObject.setBank((totalObject.bank -= dadShoesPrice));
    setFeedback(displayBuyResult, "good", dadShoesGood);
  } else {
    handleNotEnoughMoney(displayBuyResult);
  }
};

// TACO
export const handleTacoBuy = (totalObject, displayBuyResult) => {
  if (totalObject.bank >= tacoPrice) {
    totalObject.setBank((totalObject.bank -= tacoPrice));
    setFeedback(displayBuyResult, "good", tacoGood);
  } else {
    handleNotEnoughMoney(displayBuyResult);
  }
};

// ICED AMERICANO
export const handleIcedAmericanoBuy = (totalObject, displayBuyResult) => {
  if (totalObject.bank >= icedAmericanoPrice) {
    totalObject.setBank((totalObject.bank -= icedAmericanoPrice));
    setFeedback(displayBuyResult, "good", icedAmericanoGood);
  } else {
    handleNotEnoughMoney(displayBuyResult);
  }
};

// FRENCH FRIES
export const handleFrenchFriesBuy = (totalObject, displayBuyResult) => {
  if (totalObject.bank >= frenchFriesPrice) {
    totalObject.setBank((totalObject.bank -= frenchFriesPrice));
    setFeedback(displayBuyResult, "good", friesGood);
  } else {
    handleNotEnoughMoney(displayBuyResult);
  }
};

// SCRATCHER

// scratcher2prob is the line the player wins $2
// scratcher1prob is the line the player wins $1
const [scratcher2prob, scratcher1prob] = [0.3, 0.45];

export const handleScratcherBuy = (totalObject, displayBuyResult) => {
  if (totalObject.bank >= scratcherPrice) {
    totalObject.setBank((totalObject.bank -= scratcherPrice));

    // check to see if the scracher won the player any money
    const randomValue = Math.random();
    if (randomValue < scratcher2prob) {
      totalObject.setBank((totalObject.bank += 2));
      setFeedback(displayBuyResult, "good", scratcherGood, 2);
    } else if (randomValue < scratcher1prob) {
      totalObject.setBank((totalObject.bank += 1));
      setFeedback(displayBuyResult, "good", scratcherGood, 1);
    } else {
      setFeedback(displayBuyResult, "bad", scratcherBad, -scratcherPrice);
    }
  } else {
    handleNotEnoughMoney(displayBuyResult);
  }
};

// each item is represented as an object
const inventoryItems = [
  { name: "Scratcher", price: scratcherPrice, function: handleScratcherBuy },
  {
    name: "French Fries",
    price: frenchFriesPrice,
    function: handleFrenchFriesBuy,
  },
  {
    name: "Iced Americano",
    price: icedAmericanoPrice,
    function: handleIcedAmericanoBuy,
  },
  {
    name: "Taco",
    price: tacoPrice,
    function: handleTacoBuy,
  },
  {
    name: "Overpriced dad shoes",
    price: dadShoesPrice,
    function: handleDadShoesBuy,
  },
];

export default inventoryItems;
