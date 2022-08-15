// Real currency format
export const irrCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("Pt").format(price) : null;
};

//pound currency format
export const gbpCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("en-GB").format(price) : null;
};
