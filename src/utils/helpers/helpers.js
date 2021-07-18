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
    return {};
  }
};

export const extractFilters = (products = []) => {
  const redundantSpecs = [
    'package width',
    'package height',
    'package thickness',
    'package weight in kgs',
    'model number',
    'model name',
    'item ean',
    'external product id type',
    'external product id',
    'serial scan required',
    'epc-a',
    'width',
    'length',
    'upc-a',
    'is white glove required',
    'height',
    'depth',
    'product weight',
    'ean-13',
    'package length'
  ];
  const categories = [...new Set(products.map(product => product.category))];
  const productSpecs = products
    .map(product => jsonParse(product.specs))
    .filter(product => product);
  let specs = [
    ...new Set(
      productSpecs.reduce((t, productSpec) => {
        t.push(
          ...Object.keys(productSpec).filter(
            spec => !redundantSpecs.includes(spec.toLowerCase())
          )
        );
        return t;
      }, [])
    )
  ];

  specs = specs
    .map(spec => ({
      name: spec,
      values: [
        ...new Set(
          productSpecs.map(product => product[spec]).filter(value => value)
        )
      ]
    }))
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return { categories, specs };
};

export const filterProducts = ({
  products = [],
  category = '',
  specs = {}
}) => {
  let res = products;

  if (category) {
    res = res.filter(product => product.category === category);
  }
  if (specs) {
    Object.keys(specs).forEach(spec => {
      if (specs[spec]?.length)
        res = res.filter(product =>
          specs[spec].includes(jsonParse(product.specs)[spec])
        );
    });
  }
  return res;
};
