import { AbstractCollectionResponse } from './abstract-collection-response.js';
import { SubscribePage } from '../entity/subscribe-page.js';

export class SubscribePageCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new SubscribePage(item));
    }
  }
}
