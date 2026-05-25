import { Administrator } from './administrator.js';

export class SubscribePage {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id ? Number(data.id) : 0;
    this.title = data.title || '';
    this.active = !!data.active;
    this.owner = (data.owner && typeof data.owner === 'object') ? new Administrator(data.owner) : null;
    this.data = this._normalizeDataItems(data.data);
  }

  /**
   * Normalized key/value items from API payload.
   *
   * @param {Array<{key: string, value: *}>|Object|null|undefined} rawData
   * @returns {Array<{key: string, value: *}>}
   * @private
   */
  _normalizeDataItems(rawData) {
    if (Array.isArray(rawData)) {
      return rawData
        .filter((item) => item && typeof item === 'object' && item.key !== undefined)
        .map((item) => ({
          key: String(item.key),
          value: item.value ?? null
        }));
    }

    if (rawData && typeof rawData === 'object') {
      return Object.entries(rawData).map(([key, value]) => ({ key, value }));
    }

    return [];
  }
}
