import { AbstractCollectionResponse } from '../abstract-collection-response';
import { SubscriberAttributeDefinition } from '../../entity/subscriber-attribute-definition';

export class SubscriberAttributeCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new SubscriberAttributeDefinition(item));
    }
  }
}
