import { AbstractResponse } from './abstract-response.js';
import { CursorPagination } from './cursor-pagination.js';

export class AbstractCollectionResponse extends AbstractResponse {
  /**
   * @param {Object} data
   */
  constructor(data = {}) {
    super();
    const p = data.pagination || {};
    const pagination = {
      total: p.total ?? (Array.isArray(data.items) ? data.items.length : 0),
      limit: p.limit ?? CursorPagination.DEFAULT_LIMIT,
      has_more: p.has_more ?? p.hasMore ?? false,
      next_cursor: p.next_cursor ?? p.nextCursor ?? null,
    };

    this.items = [];
    this.pagination = new CursorPagination(pagination);
    this.processItems(Array.isArray(data.items) ? data.items : []);
  }

  // Implement in subclass to convert raw items into entity objects
  // eslint-disable-next-line no-unused-vars
  processItems(items) {
    throw new Error('processItems(items) must be implemented by subclass');
  }

  toJSON() {
    const data = this.pagination.toJSON();
    data.items = this.getItemsAsArray();
    return data;
  }

  getItemsAsArray() {
    const out = [];
    for (const it of this.items) {
      if (it && typeof it === 'object') {
        if (typeof it.toJSON === 'function') {
          out.push(it.toJSON());
          continue;
        }
      }
      out.push(it);
    }
    return out;
  }
}
