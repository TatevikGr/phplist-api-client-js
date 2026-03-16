import { AbstractCollectionResponse } from '../abstract-collection-response';
import { SubscriberHistory } from '../../entity/subscriber-history';

export class SubscriberHistoryCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new SubscriberHistory(item));
    }
  }
}
