import { AbstractCollectionResponse } from './abstract-collection-response';
import { Template } from '../entity/template';

export class TemplateCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new Template(item));
    }
  }
}
