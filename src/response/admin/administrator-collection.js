import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { Administrator } from '../../entity/administrator.js';

export class AdministratorCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new Administrator(item));
    }
  }
}
