import { AbstractCollectionResponse } from '../abstract-collection-response';
import { SubscriberList } from '../../entity/subscriber-list';

export class SubscriberListCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new SubscriberList(item));
    }
  }
}
