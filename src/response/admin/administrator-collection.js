import { AbstractCollectionResponse } from '../abstract-collection-response';
import { Administrator } from '../../entity/administrator';

export class AdministratorCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new Administrator(item));
    }
  }
}
