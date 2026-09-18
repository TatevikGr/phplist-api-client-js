import { StuckCampaign } from '../../entity/campaign/stuck-campaign.js';

/**
 * Response class for a list of campaigns stuck in processing.
 */
export class StuckCampaignCollection {
  /**
   * @param {Array} data
   */
  constructor(data = []) {
    this.items = [];
    for (const item of Array.isArray(data) ? data : []) {
      this.items.push(new StuckCampaign(item));
    }
  }
}