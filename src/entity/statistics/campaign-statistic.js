export class CampaignStatistic {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.campaignId = data.campaign_id !== undefined ? Number(data.campaign_id) : 0;
    this.subject = data.subject || '';
    this.dateSent = data.date_sent || null;
    this.sent = data.sent !== undefined ? Number(data.sent) : 0;
    this.bounces = data.bounces !== undefined ? Number(data.bounces) : 0;
    this.forwards = data.forwards !== undefined ? Number(data.forwards) : 0;
    this.uniqueViews = data.unique_views !== undefined ? Number(data.unique_views) : 0;
    this.totalClicks = data.total_clicks !== undefined ? Number(data.total_clicks) : 0;
    this.uniqueClicks = data.unique_clicks || '0';
  }
}
