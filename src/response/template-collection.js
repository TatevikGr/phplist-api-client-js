import { AbstractCollectionResponse } from './abstract-collection-response.js';
import { Template } from '../entity/template.js';

export class TemplateCollection extends AbstractCollectionResponse {
  processItems(items) {
    this.items = [];
    for (const item of items) {
      this.items.push(new Template(item));
    }
  }
}
