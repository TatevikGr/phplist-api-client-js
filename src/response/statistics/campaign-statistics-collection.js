import { AbstractCollectionResponse } from '../abstract-collection-response';
import { CampaignStatistic } from '../../entity/statistics/campaign-statistic';

export class CampaignStatisticsCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new CampaignStatistic(item));
    }
  }
}
