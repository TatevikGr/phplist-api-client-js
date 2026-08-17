export class RecentCampaign {
  /**
   * @param {Object} data
   */
  constructor(data = {}) {
    this.name = data.name || '';
    this.status = data.status !== undefined ? data.status : null;
    this.date = data.date || null;
    this.openRate = data.open_rate || '';
    this.clickRate = data.click_rate || '';
  }
}