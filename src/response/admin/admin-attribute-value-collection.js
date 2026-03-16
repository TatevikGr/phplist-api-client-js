import { AbstractCollectionResponse } from '../abstract-collection-response';
import { AdminAttributeValue } from '../../entity/admin-attribute-value';

export class AdminAttributeValueCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new AdminAttributeValue(item));
    }
  }
}
