export class ViewOpen {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.campaignId = data.campaign_id !== undefined ? Number(data.campaign_id) : 0;
    this.subject = data.subject || '';
    this.sent = data.sent !== undefined ? Number(data.sent) : 0;
    this.uniqueViews = data.unique_views !== undefined ? Number(data.unique_views) : 0;
    this.rate = data.rate !== undefined ? Number(data.rate) : 0.0;
  }
}
