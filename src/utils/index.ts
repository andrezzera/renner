export const intToCurrency = (value: number) => {
  let currency: number | string = value + '';
  currency = parseInt(currency.replace(/[\D]+/g, ''));
  currency = currency + '';
  currency = currency.replace(/([0-9]{2})$/g, ',$1');

  if (currency.length > 6) {
    currency = currency.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
  }
  return 'R$ ' + currency;
};

export const limitText = (text: string, limit: number) => {
  return text.substring(0, limit);
};
