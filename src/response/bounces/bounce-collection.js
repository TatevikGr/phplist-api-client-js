import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { Bounce } from '../../entity/bounce.js';

export class BounceCollection extends AbstractCollectionResponse {
  /**
   * @param {Object|Array} data
   */
  constructor(data = {}) {
    const normalized = Array.isArray(data)
      ? {
          items: data,
          pagination: {
            total: data.length,
            limit: data.length,
            has_more: false,
            next_cursor: null,
          },
        }
      : data;

    super(normalized);
  }

  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new Bounce(item));
    }
  }
}
