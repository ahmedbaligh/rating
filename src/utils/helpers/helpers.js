const searchSuggestions = [
  'iPhoneX',
  'iPhoneXs',
  'iPhoneXs Max',
  'iPhone 11',
  'iPhone 12',
  'iPhone 12 Max',
  'iPhone 12 Pro',
  'Flowers',
  'People',
  'Developers',
  'Apples',
  'Oranges',
  'exWives',
  'Sad',
  'Fuck off',
  'Hidden Gem',
  'iMac',
  'Xbox',
  'Laptop',
  'Washers',
  'ايفون'
];

const productsCount = {
  allCategories: 7268,
  smartphones: 3280,
  computers: 1624,
  fashion: 539,
  sports: 367
};

export const getSearchSuggestions = term =>
  term
    ? searchSuggestions
        .filter(word => word.toLowerCase().includes(term.toLowerCase()))
        .slice(0, 5)
    : [];

export const getProductsCount = (categoryName, lang) =>
  getFormattedNumber(productsCount[categoryName], lang);

export const getFormattedNumber = (amount, lang = 'en') =>
  new Intl.NumberFormat(lang).format(amount);

export const jsonParse = str => {
  str = str.replaceAll(', }', ' }').replaceAll(', ]', ' ]');
  return JSON.parse(
    str
      .replaceAll('"', "'")
      .replaceAll(', }', ' }')
      .replaceAll(', ]', ' ]')
      .replaceAll("{ '", '{ "')
      .replaceAll("' }", '" }')
      .replaceAll("' ]", '" ]')
      .replaceAll("','", '","')
      .replaceAll("':'", '":"')
  );
};
