export class Subscriber {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.id = data.id ? Number(data.id) : 0;
    this.email = data.email || '';
    this.createdAt = data.created_at || '';
    this.updatedAt = data.updated_at || '';
    this.confirmed = !!data.confirmed;
    this.blacklisted = !!data.blacklisted;
    this.bounceCount = data.bounce_count ? Number(data.bounce_count) : 0;
    this.uniqueId = data.unique_id || '';
    this.uuid = data.uuid || '';
    this.htmlEmail = !!data.html_email;
    this.disabled = !!data.disabled;
    this.subscribedLists = Array.isArray(data.subscribed_lists) ? data.subscribed_lists : null;
    this.history = Array.isArray(data.history) ? data.history : null;
  }
}
