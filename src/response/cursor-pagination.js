export class CursorPagination {
  static DEFAULT_LIMIT = 25;

  /**
   * @param {Object} data
   */
  constructor(data = {}) {
    this.total = Number(data.total ?? 0);
    this.limit = Number(data.limit ?? CursorPagination.DEFAULT_LIMIT);
    this.hasMore = Boolean(data.has_more ?? data.hasMore ?? false);
    this.nextCursor = data.next_cursor != null ? Number(data.next_cursor) : (data.nextCursor != null ? Number(data.nextCursor) : null);
  }

  toJSON() {
    return {
      total: this.total,
      limit: this.limit,
      has_more: this.hasMore,
      next_cursor: this.nextCursor,
    };
  }
}
