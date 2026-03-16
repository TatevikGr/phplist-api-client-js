import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { Subscriber } from '../../entity/subscriber.js';

export class SubscriberCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new Subscriber(item));
    }
  }
}
