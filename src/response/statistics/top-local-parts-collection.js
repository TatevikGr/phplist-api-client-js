import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { TopLocalPart } from '../../entity/statistics/top-local-part.js';

export class TopLocalPartsCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new TopLocalPart(item));
    }
  }
}
