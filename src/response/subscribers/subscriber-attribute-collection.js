import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { SubscriberAttributeDefinition } from '../../entity/subscriber-attribute-definition.js';

export class SubscriberAttributeCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new SubscriberAttributeDefinition(item));
    }
  }
}
