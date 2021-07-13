class Validation {
  isEmpty(input) {
    return !input;
  }

  name(input) {
    return !this.isEmpty(input);
  }

  username(input, bypass = false) {
    if (bypass) return this.isEmpty(input);

    if (this.isEmpty(input)) return false;

    const pattern = /^\d/;
    return !pattern.test(input);
  }

  email(input, bypass = false) {
    if (bypass) return this.isEmpty(input);

    if (this.isEmpty(input)) return false;

    const pattern = /([a-z0-9._%+-]{2,})@\w{2,}\..{2,}$/i;
    return pattern.test(input);
  }

  password(input, bypass = false) {
    if (bypass) return this.isEmpty(input);

    if (this.isEmpty(input)) return false;

    const pattern = /(?=.*\d)(?=.*[A-Z]).{8,}/;
    return pattern.test(input);
  }

  checkEquality(value, confirm) {
    return value === confirm;
  }
}

export default new Validation();
