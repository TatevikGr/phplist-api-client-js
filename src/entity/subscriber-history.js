export class SubscriberHistory {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id ? Number(data.id) : 0;
    this.ip = data.ip || '';
    this.createdAt = data.created_at || '';
    this.summary = data.summary || '';
    this.detail = data.detail || '';
    this.systemInfo = data.system_info || '';
  }
}
