import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { AdminAttributeDefinition } from '../../entity/admin-attribute-definition.js';

export class AdminAttributeDefinitionCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new AdminAttributeDefinition(item));
    }
  }
}
