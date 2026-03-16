export class SubscriberList {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id ? Number(data.id) : 0;
    this.name = data.name || '';
    this.createdAt = data.created_at || '';
    this.description = data.description || null;
    this.listPosition = data.list_position !== undefined ? Number(data.list_position) : null;
    this.subjectPrefix = data.subject_prefix || null;
    this.public = !!data.public;
    this.category = data.category || null;
  }
}
