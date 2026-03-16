import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { SubscriberList } from '../../entity/subscriber-list.js';

export class SubscriberListCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new SubscriberList(item));
    }
  }
}
