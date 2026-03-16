import { AbstractCollectionResponse } from '../abstract-collection-response';
import { ViewOpen } from '../../entity/statistics/view-open';

export class ViewOpensCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new ViewOpen(item));
    }
  }
}
