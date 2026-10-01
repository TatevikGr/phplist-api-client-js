import { AbstractCollectionResponse } from '../abstract-collection-response.js';
import { DomainConfirmation } from '../../entity/statistics/domain-confirmation.js';

export class DomainConfirmationCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new DomainConfirmation(item));
    }
  }
}