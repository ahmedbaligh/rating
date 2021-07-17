const productsCount = {
  allCategories: 7268,
  smartphones: 3280,
  computers: 1624,
  fashion: 539,
  sports: 367
};

export const getProductsCount = (categoryName, lang) =>
  getFormattedNumber(productsCount[categoryName], lang);

export const getFormattedNumber = (amount, lang = 'en') =>
  new Intl.NumberFormat(lang).format(amount);

const removeWhitespace = text => text.replace(/([\n\t\r])/g, '');

export const jsonParse = str => {
  try {
    return JSON.parse(
      removeWhitespace(str)
        .replaceAll('"', "'")
        .replaceAll(', }', ' }')
        .replaceAll(', ]', ' ]')
        .replaceAll("{ '", '{ "')
        .replaceAll("' }", '" }')
        .replaceAll("' ]", '" ]')
        .replaceAll("','", '","')
        .replaceAll("':'", '":"')
    );
  } catch {
    return null;
  }
};
