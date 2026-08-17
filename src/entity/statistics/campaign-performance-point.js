export class CampaignPerformancePoint {
  /**
   * @param {Object} data
   */
  constructor(data = {}) {
    this.date = data.date || null;
    this.opens = data.opens !== undefined ? Number(data.opens) : 0;
    this.clicks = data.clicks !== undefined ? Number(data.clicks) : 0;
  }
}