import { AbstractCollectionResponse } from '../abstract-collection-response';
import { AdminAttributeDefinition } from '../../entity/admin-attribute-definition';

export class AdminAttributeDefinitionCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new AdminAttributeDefinition(item));
    }
  }
}
