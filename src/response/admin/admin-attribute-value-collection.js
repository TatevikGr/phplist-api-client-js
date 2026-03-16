import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { AdminAttributeValue } from '../../entity/admin-attribute-value.js';

export class AdminAttributeValueCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new AdminAttributeValue(item));
    }
  }
}
