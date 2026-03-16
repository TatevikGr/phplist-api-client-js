export class AbstractResponse {
  // Convert camelCase key to snake_case
  static _toSnakeCase(key) {
    return key.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  }

  // Convert the response instance to a plain object with snake_case keys
  toJSON() {
    const data = {};
    for (const key of Object.keys(this)) {
      const snake = AbstractResponse._toSnakeCase(key);
      const value = this[key];
      data[snake] = value;
    }
    return data;
  }
}
