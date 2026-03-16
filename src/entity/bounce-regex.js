export class BounceRegex {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id ? Number(data.id) : 0;
    this.regex = data.regex || '';
    this.regexHash = data.regex_hash || '';
    this.action = data.action || null;
    this.listOrder = data.list_order !== undefined ? Number(data.list_order) : null;
    this.adminId = data.admin_id !== undefined ? Number(data.admin_id) : null;
    this.comment = data.comment || null;
    this.status = data.status || null;
    this.count = data.count !== undefined ? Number(data.count) : null;
  }
}
