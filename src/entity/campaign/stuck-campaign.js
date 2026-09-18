export class StuckCampaign {
  /**
   * @param {Object} data
   */
  constructor(data = {}) {
    this.id = data.id ? Number(data.id) : 0;
    this.subject = data.subject || '';
    this.status = data.status || '';
    this.updatedAt = data.updated_at || data.updatedAt || null;
    this.stuckSeconds = data.stuck_seconds ?? data.stuckSeconds ?? 0;
  }
}