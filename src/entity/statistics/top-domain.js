export class TopDomain {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.domain = data.domain || '';
    this.subscribers = data.subscribers !== undefined ? Number(data.subscribers) : 0;
  }
}
