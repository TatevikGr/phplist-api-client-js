import { RecentCampaign } from '../../entity/statistics/recent-campaign.js';

/**
 * Response class for a collection of recent campaigns.
 */
export class RecentCampaignsCollection {
  /**
   * @param {Array} data
   */
  constructor(data = []) {
    this.campaigns = [];
    for (const campaign of Array.isArray(data) ? data : []) {
      this.campaigns.push(new RecentCampaign(campaign));
    }
  }
}