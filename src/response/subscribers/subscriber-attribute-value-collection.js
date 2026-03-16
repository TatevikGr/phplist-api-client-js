import { AbstractCollectionResponse } from '../abstract-collection-response';
import { SubscriberAttributeValue } from '../../entity/subscriber-attribute-value';

export class SubscriberAttributeValueCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new SubscriberAttributeValue(item));
    }
  }
}
