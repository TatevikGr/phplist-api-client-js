import { Administrator } from './administrator';
import { AdminAttributeDefinition } from './admin-attribute-definition';

export class AdminAttributeValue {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.administrator = data.administrator ? new Administrator(data.administrator) : null;
    this.definition = data.definition ? new AdminAttributeDefinition(data.definition) : null;
    this.value = data.value || null;
  }
}
