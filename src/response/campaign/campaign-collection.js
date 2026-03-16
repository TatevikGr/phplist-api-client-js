import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { Campaign } from '../../entity/campaign.js';

export class CampaignCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new Campaign(item));
    }
  }
}
