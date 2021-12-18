// currency formatting
// taken from https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
export const currencyFormatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
});
