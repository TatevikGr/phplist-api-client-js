import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { SubscriberAttributeValue } from '../../entity/subscriber-attribute-value.js';

export class SubscriberAttributeValueCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new SubscriberAttributeValue(item));
    }
  }
}
