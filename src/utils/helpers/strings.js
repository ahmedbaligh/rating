class Strings {
  toCamelCase(text) {
    return text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  }

  toTitleCase(text) {
    return text
      .trim()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  toKebabCase(text) {
    return text
      .trim()
      .split(/\s+|_|(?=[A-Z])/)
      .join('-')
      .toLowerCase();
  }
}

export default new Strings();
