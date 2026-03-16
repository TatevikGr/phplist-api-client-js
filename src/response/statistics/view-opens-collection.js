import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { ViewOpen } from '../../entity/statistics/view-open.js';

export class ViewOpensCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new ViewOpen(item));
    }
  }
}
