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

export const getSearchSuggestions = term =>
  term
    ? searchSuggestions
        .filter(word => word.toLowerCase().includes(term.toLowerCase()))
        .slice(0, 5)
    : [];
