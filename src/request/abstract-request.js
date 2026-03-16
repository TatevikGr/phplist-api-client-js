/**
 * Abstract base class for all API request classes.
 */
export class AbstractRequest {
  /**
   * Convert the request to an object that can be passed to the API client.
   * This method is automatically used by JSON.stringify() which is used by axios.
   *
   * @returns {Object} The request data as an object with snake_case keys
   */
  toJSON() {
    const data = {};
    const properties = Object.getOwnPropertyNames(this);

    for (const name of properties) {
      const value = this[name];
      if (value !== undefined && value !== null) {
        const snakeName = this._camelToSnake(name);
        data[snakeName] = value;
      }
    }

    return data;
  }

  /**
   * Helper to convert camelCase → snake_case
   * @param {string} input
   * @returns {string}
   * @private
   */
  _camelToSnake(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  }
}
