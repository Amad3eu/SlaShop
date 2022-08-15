export const changeNumbersFormatEnToPt= (number: number | string) =>
  number.toString().replace(/\d/g, (index) => "0123456789"[index]);
