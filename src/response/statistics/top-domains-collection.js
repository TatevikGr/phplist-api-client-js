import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { TopDomain } from '../../entity/statistics/top-domain.js';

export class TopDomainsCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new TopDomain(item));
    }
  }
}
